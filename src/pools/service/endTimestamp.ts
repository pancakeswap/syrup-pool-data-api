import { getViemClients } from "../../utils/viem";
import { ChainId } from "@pancakeswap/sdk";
import { Address } from "viem";
import { smartChefABI } from "../../abi/smartChef";

export const fetchEndTimestamp = async (contractAddress: Address) => {
  const client = getViemClients({ chainId: ChainId.ARBITRUM_ONE });
  const [endTimestamp] = await client.multicall({
    contracts: [
      {
        abi: smartChefABI,
        address: contractAddress,
        functionName: "endTimestamp"
      }
    ],
    allowFailure: false
  });

  return Number(endTimestamp) ?? 0;
};
