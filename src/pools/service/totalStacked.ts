import { getViemClients } from "../../utils/viem";
import { ChainId } from "@pancakeswap/sdk";
import { alpTokenABI } from "../../abi/alpToken";
import { getBalanceAmount } from "../../utils/formatBalance";
import BigNumber from "bignumber.js";

export const fetchTotalStaked = async (
  contractAddress: `0x${string}`,
  tokenAddress: `0x${string}`,
  chainId: ChainId
) => {
  const client = getViemClients({ chainId });
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
  return Number(getBalanceAmount(new BigNumber(totalStaked.toString()))) ?? 0;
};
