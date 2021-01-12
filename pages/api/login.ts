import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import auth0 from "../../lib/auth0";

const login: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (e) {
    console.error(e);
    res.status(e.status || 500).end(e.message);
  }
};

export default login;
