import prisma from "@/lib/prisma";
import { NextApiHandler } from "next";

const user: NextApiHandler = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await prisma.user.findUnique({
      where: { email: email as string },
    });

    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.json(null);
  }
};

export default user;
