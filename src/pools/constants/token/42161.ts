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
    "https://pancakeswap.finance/" // TODO: change it
  ),
  mck: new ERC20Token( // TODO: remove on PRD [for test purpose only]
    ChainId.ARBITRUM_ONE,
    "0x47B2286A76acF9a99B30c8D8261EF6Eb066dafC7",
    18,
    "A",
    "MOCK Token A",
    "https://mock-token.com/"
  )
};
