import { ConnectDB } from "@/constants/connectDB";
import User from "@/constants/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await ConnectDB();
  const data = await request.json();
  console.log(data);
  const { name, email } = data

  const user = await User.create({ name, email });
  await user.save();
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" }, { status: 500 });
  }
}
