import { getAddress } from "viem";
import { SerializedPool } from "../types";
import { SerializedWrappedToken } from "@pancakeswap/token-lists";
import { arbTokens } from "../token/42161";

// TODO: update the config when real pool will be added
export const arbPool: SerializedPool[] = [
  {
    sousId: 1,
    stakingToken: arbTokens.alp,
    earningToken: arbTokens.cake,
    contractAddress: "0x1b08a836d43719EF2a7D8F3bb2A093EF3DBc9D09",
    tokenPerSecond: 100000000
  },
  {
    sousId: 2,
    stakingToken: arbTokens.mck,
    earningToken: arbTokens.cake,
    contractAddress: "0x1b08a836d43719EF2a7D8F3bb2A093EF3DBc9D09",
    tokenPerSecond: 100000000
  }
].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress) as `0x${string}`,
  stakingToken: p.stakingToken.serialize as SerializedWrappedToken,
  earningToken: p.earningToken.serialize as SerializedWrappedToken,
  metrics: {
    totalStaked: 0,
    earningTokenPrice: 0,
    stakingTokenPrice: 0,
    apr: 0,
    endTimestamp: 0
  }
}));

export const arbitrumPool: SerializedPool[] = [...arbPool];
