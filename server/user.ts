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
    await User.create(userData);
  } catch (error) {
    console.log({ error });
  }
};
