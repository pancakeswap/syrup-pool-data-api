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
  {
    sousId: 2,
    stakingToken: arbTokens.alp,
    earningToken: arbTokens.cake,
    contractAddress: "0x0639c5715EC308E16f089c96C0C109302d76FA81",
    tokenPerSecond: 0.01177,
  },
  {
    sousId: 3,
    stakingToken: arbTokens.alp,
    earningToken: arbTokens.cake,
    contractAddress: "0x85146C0c5968d9640121eebd13030c99298f87b3",
    tokenPerSecond: 0.00615,
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
