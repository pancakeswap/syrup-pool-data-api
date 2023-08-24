import { SerializedPool } from "../constants/types";
import { fetchAlpTokenPrice } from "./alpTokenPrice";
import { getPoolAprByTokenPerSecond } from "./poolApr";
import { fetchCakeTokenPrice } from "./cakeTokenPrice";
import { fetchEndTimestamp } from "./endTimestamp";
import { fetchTotalStaked } from "./totalStacked";

export const calculatePoolMetrics = async (poolsConfigs: SerializedPool[]) => {
  return await Promise.all(poolsConfigs.map(value => fillMetric(value)));
};

const fillMetric = async (poolConfig: SerializedPool) => {
  const totalStaked = await fetchTotalStaked(poolConfig.contractAddress, poolConfig.stakingToken.address);
  const stakingTokenPrice = await fetchAlpTokenPrice();
  const earningTokenPrice = await fetchCakeTokenPrice();
  const apr = await getPoolAprByTokenPerSecond(stakingTokenPrice, earningTokenPrice, totalStaked, poolConfig.tokenPerSecond);
  const endTimestamp = await fetchEndTimestamp(poolConfig.contractAddress);

  poolConfig.metrics.totalStaked = totalStaked;
  poolConfig.metrics.stakingTokenPrice = stakingTokenPrice;
  poolConfig.metrics.earningTokenPrice = earningTokenPrice;
  poolConfig.metrics.apr = apr;
  poolConfig.metrics.endTimestamp = endTimestamp;

  return poolConfig;
};
