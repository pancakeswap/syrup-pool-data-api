import { getAddress } from "viem";
import { SerializedPool } from "../types";
import { SerializedWrappedToken } from "@pancakeswap/token-lists";
import { arbTokens } from "../token/42161";

export const arbPool: SerializedPool[] = [
  {
    sousId: 1,
    stakingToken: arbTokens.alp,
    earningToken: arbTokens.cake,
    contractAddress: "0x3dBdE2682330105902fb482d9849C270aa8E0881",
    tokenPerSecond: 0.01135,
  },
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
    endTimestamp: 0,
  },
}));

export const arbitrumPool: SerializedPool[] = [...arbPool];
