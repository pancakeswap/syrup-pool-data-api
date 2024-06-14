import { ChainId, ERC20Token } from "@pancakeswap/sdk";
import { CAKE } from "./common";

export const arbTokens = {
  cake: CAKE[ChainId.ARBITRUM_ONE],
  alp: new ERC20Token(
    ChainId.ARBITRUM_ONE,
    "0xBc76B3FD0D18C7496C0B04aeA0Fe7C3Ed0e4d9C9",
    18,
    "ALP",
    "ApolloX LP",
    "https://www.apollox.finance/"
  ),
    arb: new ERC20Token(
        ChainId.ARBITRUM_ONE,
        "0x912CE59144191C1204E64559FE8253a0e49E6548",
        18,
        "ARB",
        "Arbitrum",
        "https://arbitrum.foundation/"
    ),
};
