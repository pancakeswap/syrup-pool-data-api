import { getViemClients } from "../../utils/viem";
import { ChainId } from "@pancakeswap/sdk";
import { apolloxABI } from "../../abi/apolloX";
import { getBalanceAmount } from "../../utils/formatBalance";
import BigNumber from "bignumber.js";

const TOKEN_DECIMALS = 8;
const CONTRACT_ADDRESS = "0xB3879E95a4B8e3eE570c232B19d520821F540E48";

export const fetchAlpTokenPrice = async () => {
  const client = getViemClients({ chainId: ChainId.ARBITRUM_ONE });
  const [alpPrice] = await client.multicall({
    contracts: [
      {
        abi: apolloxABI,
        address: CONTRACT_ADDRESS,
        functionName: "alpPrice"
      }
    ],
    allowFailure: false
  });

  const alpUsdPrice = getBalanceAmount(new BigNumber(alpPrice.toString()), TOKEN_DECIMALS).toNumber();
  return alpUsdPrice ?? 0;
};
