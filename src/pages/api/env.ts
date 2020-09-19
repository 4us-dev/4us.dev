import { NextApiRequest, NextApiResponse } from "next";

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    node_env: process.env.NODE_ENV,
    app_env: process.env.APP_ENV,
  });
};
