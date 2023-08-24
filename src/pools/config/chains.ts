import { ChainId } from "@pancakeswap/sdk";
import memoize from "lodash/memoize";
import { arbitrum, mainnet } from "@wagmi/chains";

export const CHAIN_QUERY_NAME = {
  [ChainId.ETHEREUM]: "eth",
  [ChainId.GOERLI]: "goerli",
  [ChainId.BSC]: "bsc",
  [ChainId.BSC_TESTNET]: "bscTestnet",
  [ChainId.ARBITRUM_ONE]: "arb",
  [ChainId.ARBITRUM_GOERLI]: "arbGoerli",
  [ChainId.POLYGON_ZKEVM]: "polygonZkEVM",
  [ChainId.POLYGON_ZKEVM_TESTNET]: "polygonZkEVMTestnet",
  [ChainId.ZKSYNC]: "zkSync",
  [ChainId.ZKSYNC_TESTNET]: "zkSyncTestnet",
  [ChainId.LINEA_TESTNET]: "lineaTestnet",
} as const satisfies Record<ChainId, string>;

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  };
}, {} as Record<string, ChainId>);

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined;
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined;
});

export const SUPPORTED_CHAINS = [mainnet, arbitrum];
