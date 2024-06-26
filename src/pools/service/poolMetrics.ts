import { SerializedPool } from "../constants/types";
import { fetchAlpTokenPrice } from "./alpTokenPrice";
import { getPoolAprByTokenPerSecond } from "./poolApr";
import { fetchTokenPrice } from "./cakeTokenPrice";
import { fetchEndTimestamp } from "./endTimestamp";
import { fetchTotalStaked } from "./totalStacked";
import { ChainId } from "@pancakeswap/sdk";
import { alpFee } from "./alpFee";

export const calculatePoolMetrics = async (poolsConfigs: SerializedPool[], chainId: ChainId) => {
  return await Promise.all(poolsConfigs.map((value) => fillMetric(value, chainId)));
};

const fillMetric = async (poolConfig: SerializedPool, chainId) => {
  const totalStaked = await fetchTotalStaked(poolConfig.contractAddress, poolConfig.stakingToken.address, chainId);
  const stakingTokenPrice = await fetchAlpTokenPrice();
  const earningTokenPrice = await fetchTokenPrice(poolConfig.earningToken);
  const apr = await getPoolAprByTokenPerSecond(
    stakingTokenPrice,
    earningTokenPrice,
    totalStaked,
    poolConfig.tokenPerSecond
  );
  const endTimestamp = await fetchEndTimestamp(poolConfig.contractAddress, chainId);
  const alpApr = await alpFee(chainId);

  poolConfig.metrics.totalStaked = totalStaked;
  poolConfig.metrics.stakingTokenPrice = stakingTokenPrice;
  poolConfig.metrics.earningTokenPrice = earningTokenPrice;
  poolConfig.metrics.apr = apr;
  poolConfig.metrics.alpApr = alpApr;
  poolConfig.metrics.endTimestamp = endTimestamp;

  return poolConfig;
};
