import { ChainId } from "@pancakeswap/sdk";
import { ethereumPools } from "./pools/1";
import { opbnbPool } from "./pools/204";
import { arbitrumPool } from "./pools/42161";
import { SerializedPool } from "./types";

export const SUPPORTED_CHAIN_IDS = [ChainId.ETHEREUM, ChainId.ARBITRUM_ONE, ChainId.OPBNB] as const;

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number];

export function isPoolsSupported(chainId: number): chainId is SupportedChainId {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}

export type PoolsConfigByChain<TChainId extends ChainId> = {
  [chainId in TChainId]: SerializedPool[];
};

export const POOLS_CONFIG_BY_CHAIN = {
  [ChainId.ETHEREUM]: ethereumPools,
  [ChainId.ARBITRUM_ONE]: arbitrumPool,
  [ChainId.OPBNB]: opbnbPool,
} as PoolsConfigByChain<SupportedChainId>;

export const getPoolsConfig = (chainId: ChainId) => {
  if (!isPoolsSupported(chainId)) {
    return undefined;
  }
  return POOLS_CONFIG_BY_CHAIN[chainId];
};
