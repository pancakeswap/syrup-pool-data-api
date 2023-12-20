import { ChainId } from "@pancakeswap/sdk";
import { opBNB } from "viem/chains";

export const PUBLIC_NODES = {
  [ChainId.BSC]: "https://rpc.ankr.com/bsc",
  [ChainId.BSC_TESTNET]: "data-seed-prebsc-1-s1.binance.org:8545",
  [ChainId.ETHEREUM]: "https://cloudflare-eth.com",
  [ChainId.GOERLI]: "https://rpc.ankr.com/eth_goerli",
  [ChainId.ARBITRUM_ONE]: "https://arb1.arbitrum.io/rpc",
  [ChainId.ARBITRUM_GOERLI]: "https://goerli-rollup.arbitrum.io/rpc",
  [ChainId.POLYGON_ZKEVM]: "https://zkevm-rpc.com",
  [ChainId.POLYGON_ZKEVM_TESTNET]: "https://rpc.public.zkevm-test.net",
  [ChainId.ZKSYNC]: "https://mainnet.era.zksync.io",
  [ChainId.ZKSYNC_TESTNET]: "https://testnet.era.zksync.dev",
  [ChainId.LINEA_TESTNET]: "https://rpc.linea.build",
  [ChainId.OPBNB]: opBNB.rpcUrls.public.http[0],
} satisfies Record<ChainId, string>;
