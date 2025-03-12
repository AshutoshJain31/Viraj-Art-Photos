"use server";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export const saveUserData = async (userData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    await connectDB();
    const data = await User.create(userData);
    return JSON.stringify(data);
  } catch (error) {
    console.log({ error });
  }
};
