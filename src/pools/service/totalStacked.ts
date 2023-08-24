import { getViemClients } from "../../utils/viem";
import { ChainId } from "@pancakeswap/sdk";
import { alpTokenABI } from "../../abi/alpToken";
import { getBalanceAmount } from "../../utils/formatBalance";
import BigNumber from "bignumber.js";

export const fetchTotalStaked = async (contractAddress: `0x${string}`, tokenAddress: `0x${string}`) => {
  const client = getViemClients({ chainId: ChainId.ARBITRUM_ONE });
  const [totalStaked] = await client.multicall({
    contracts: [
      {
        abi: alpTokenABI,
        address: tokenAddress,
        functionName: "balanceOf",
        args: [contractAddress],
      },
    ],
    allowFailure: false,
  });

  return getBalanceAmount(new BigNumber(totalStaked.toString())) ?? 0;
};
