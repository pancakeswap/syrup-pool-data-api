import { getAddress } from "viem";
import { SerializedPool } from "../types";
import { SerializedWrappedToken } from "@pancakeswap/token-lists";
import { opBnbTokens } from "../token/204";

export const opbnbPool: SerializedPool[] = [
  {
    sousId: 1,
    stakingToken: opBnbTokens.alp,
    earningToken: opBnbTokens.cake,
    contractAddress: "0xa1B46Cb13b43fb8Ae5dC7222e3294fcd10024168",
    tokenPerSecond: 0.005787,
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
