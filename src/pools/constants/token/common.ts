import { ChainId, ERC20Token } from "@pancakeswap/sdk";

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://pancakeswap.finance/"
);

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  "0x8d008B313C1d6C7fE2982F62d32Da7507cF43551",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://pancakeswap.finance/"
);

export const CAKE = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    "0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [ChainId.GOERLI]: new ERC20Token(
    ChainId.GOERLI,
    "0xc2C3eAbE0368a2Ea97f485b03D1098cdD7d0c081",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.POLYGON_ZKEVM]: new ERC20Token(
    ChainId.POLYGON_ZKEVM,
    "0x0D1E753a25eBda689453309112904807625bEFBe",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [ChainId.POLYGON_ZKEVM_TESTNET]: new ERC20Token(
    ChainId.POLYGON_ZKEVM_TESTNET,
    "0x2B3C5df29F73dbF028BA82C33e0A5A6e5800F75e",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [ChainId.ZKSYNC_TESTNET]: new ERC20Token(
    ChainId.ZKSYNC_TESTNET,
    "0xFf2FA31273c1aedB67017B52C625633d2F021f67",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [ChainId.ZKSYNC]: new ERC20Token(
    ChainId.ZKSYNC,
    "0x3A287a06c66f9E95a56327185cA2BDF5f031cEcD",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [ChainId.ARBITRUM_ONE]: new ERC20Token(
    ChainId.ARBITRUM_ONE,
    "0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  )
};

