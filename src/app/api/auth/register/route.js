import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
   const { name, email, password } = await req.json();
   const saltRounds = 10;
   await connect();

   const hashedPassword = await bcrypt.hash(password, saltRounds);

   const newUser = new User({
      name,
      email,
      password: hashedPassword
   });

   try {
      await newUser.save();
      return new NextResponse("User has been created", {
         status: 201
      });
   } catch (err) {
      return new NextResponse(err.message, {
         status: 500
      });
   }
};
