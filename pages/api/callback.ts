import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import auth0 from "../../lib/auth0";

const callback: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await auth0.handleCallback(req, res, {
      redirectTo: '/secret'
    });
  } catch (e) {
    console.error(e);
    res.status(e.status || 500).end(e.message);
  }
};

export default callback;
