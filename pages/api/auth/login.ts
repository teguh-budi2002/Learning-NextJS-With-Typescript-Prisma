import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

type ResponseData = {
  message: string;
  status?: number;
  user_token?: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });
  try {
    const { email, password } = await req.body;
    const getUserPassword: any = await prisma.user.findFirst({
      where: { email: email },
      select: {
        password: true,
      },
    });

    const checkExistingUser: boolean = bcrypt.compareSync(
      password,
      getUserPassword?.password
    );

    if (checkExistingUser) {
      jwt.sign(
        { data: checkExistingUser },
        "2Thsn%34",
        { expiresIn: "7d" },
        (err, token) => {
          return res.status(200).json({
            message: "Login Successfully",
            status: 200,
            user_token: token,
          });
        }
      );
    } else {
      return res
        .status(401)
        .json({ message: "Email or Password Is Wrong.", status: 401 });
    }
  } catch (err) {
    return res.status(400).json({ message: "Your Data Is Invalid" });
  }
};
