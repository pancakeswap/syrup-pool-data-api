import { SerializedPool } from "../constants/types";
import { fetchAlpTokenPrice } from "./alpTokenPrice";
import { getPoolAprByTokenPerSecond } from "./poolApr";
import { fetchCakeTokenPrice } from "./cakeTokenPrice";
import { fetchEndTimestamp } from "./endTimestamp";
import { fetchTotalStaked } from "./totalStacked";
import { ChainId } from "@pancakeswap/sdk";

export const calculatePoolMetrics = async (poolsConfigs: SerializedPool[], chainId: ChainId) => {
  return await Promise.all(poolsConfigs.map((value) => fillMetric(value, chainId)));
};

const fillMetric = async (poolConfig: SerializedPool, chainId) => {
  const totalStaked = await fetchTotalStaked(poolConfig.contractAddress, poolConfig.stakingToken.address, chainId);
  const stakingTokenPrice = await fetchAlpTokenPrice();
  const earningTokenPrice = await fetchCakeTokenPrice();
  const apr = await getPoolAprByTokenPerSecond(
    stakingTokenPrice,
    earningTokenPrice,
    totalStaked,
    poolConfig.tokenPerSecond
  );
  const endTimestamp = await fetchEndTimestamp(poolConfig.contractAddress, chainId);

  poolConfig.metrics.totalStaked = totalStaked;
  poolConfig.metrics.stakingTokenPrice = stakingTokenPrice;
  poolConfig.metrics.earningTokenPrice = earningTokenPrice;
  poolConfig.metrics.apr = apr;
  poolConfig.metrics.endTimestamp = endTimestamp;

  return poolConfig;
};
