import { ChainId } from "@pancakeswap/sdk";
import { createPublicClient, fallback, http, PublicClient } from "viem";
import { SUPPORTED_CHAINS } from "../pools/config/chains";
import { PUBLIC_NODES } from "../pools/config/nodes";

export const viewClients = SUPPORTED_CHAINS.reduce((prev, cur) => {
  return {
    ...prev,
    [cur.id]: createPublicClient({
      chain: cur,
      transport: fallback(
        [
          http(PUBLIC_NODES[cur.id] as string, {
            timeout: 15_000
          })
        ],
        {
          rank: false
        }
      ),
      batch: {
        multicall: {
          batchSize: 1024 * 200
        }
      }
    })
  };
}, {} as Record<ChainId, PublicClient>);

export const getViemClients = ({ chainId }: { chainId: ChainId }) => {
  return viewClients[chainId];
};
