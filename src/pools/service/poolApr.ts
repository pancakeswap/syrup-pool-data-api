import BigNumber from "bignumber.js";
import { SECONDS_IN_YEAR } from "../../utils/const";

export const getPoolAprByTokenPerSecond = async (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerSecond: number
): Promise<number> => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerSecond).times(SECONDS_IN_YEAR);
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked);
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100);
  return apr.isNaN() || !apr.isFinite() ? 0 : apr.toNumber();
};
