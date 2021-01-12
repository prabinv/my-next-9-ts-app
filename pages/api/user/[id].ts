import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import data from "../../../lib/data.json";

const user: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const userData = data.find((u) => String(u.id) === id);

  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).end('User not found');
  }
};

export default user;
