import type { NextApiRequest, NextApiResponse } from "next";
import createUser from "../../../composables/userAction";
import bcrypt from "bcrypt";

type ResponseData = {
  message: String;
  status?: Number;
};

interface UserData {
  name: string;
  email: string;
  password: string;
  address: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, password, address }: UserData = await req.body;

  try {
    const hashingPassword = await bcrypt.hash(password, 10).then((hash) => {
      return hash;
    });
    const createdUser = await createUser({
      name: name,
      email: email,
      password: hashingPassword,
      address: address,
    });
    return res.status(200).json({
      message: "User Registered Successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something Went Wrong! " + error });
  }
};
