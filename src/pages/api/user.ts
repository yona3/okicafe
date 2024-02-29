import prisma from "@/lib/prisma";
import { NextApiHandler } from "next";

const getUser: NextApiHandler = async (req, res) => {
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

const deleteUser: NextApiHandler = async (req, res) => {
  try {
    const { email } = req.query;
    await prisma.user.delete({
      where: { email: email as string },
    });

    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
};

const user: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      return getUser(req, res);
    case "DELETE":
      return deleteUser(req, res);
    default:
      return res.status(405).end();
  }
};

export default user;
