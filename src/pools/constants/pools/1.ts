import { getAddress } from "viem";
import { SerializedPool } from "../types";
import { SerializedWrappedToken } from "@pancakeswap/token-lists";
import { ethereumTokens } from "../token/1";

export const ethPools: SerializedPool[] = [
  {
    sousId: 6,
    stakingToken: ethereumTokens.cake,
    earningToken: ethereumTokens.rpl,
    contractAddress: "0x3f0bCCa8f5aA37e184B22e3A2ca8C292fe6B716B",
    tokenPerSecond: 0.0005093,
  },
].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress) as `0x${string}`,
  stakingToken: p.stakingToken.serialize as SerializedWrappedToken,
  earningToken: p.earningToken.serialize as SerializedWrappedToken,
  metrics: {
    totalStaked: 100,
    earningTokenPrice: 1.23,
    stakingTokenPrice: 5.55,
    apr: 666,
    endTimestamp: 1697436000,
  },
}));

export const ethereumPools: SerializedPool[] = [...ethPools];
