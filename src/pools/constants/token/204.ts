import { ChainId, ERC20Token } from "@pancakeswap/sdk";

export const opBnbTokens = {
  cake: new ERC20Token(
    ChainId.OPBNB,
    "0x2779106e4F4A8A28d77A24c18283651a2AE22D1C",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  alp: new ERC20Token(
    ChainId.OPBNB,
    "0xC8424F526553ac394E9020DB0a878fAbe82b698C",
    18,
    "ALP",
    "ApolloX LP",
    "https://www.apollox.finance/en"
  ),
};
