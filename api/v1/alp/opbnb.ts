import { VercelRequest, VercelResponse } from "@vercel/node";
import { getPoolsConfig } from "../../../src/pools/constants/supportedChains";
import { ChainId } from "@pancakeswap/sdk";
import { calculatePoolMetrics } from "../../../src/pools/service/poolMetrics";

export default async (req: VercelRequest, res: VercelResponse): Promise<VercelResponse | void> => {
  if (req.method?.toUpperCase() === "OPTIONS") {
    return res.status(204).end();
  }
  try {
    const poolsConfigs = getPoolsConfig(ChainId.OPBNB);
    let poolData;
    if (poolsConfigs) {
      poolData = await calculatePoolMetrics(poolsConfigs, ChainId.OPBNB);
    } else {
      return res.status(400).json({ error: { message: "No pools defined for network: " + ChainId.OPBNB } });
    }
    return res.status(200).json({ poolData });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error: { message: "Unknown error." } });
  }
};
