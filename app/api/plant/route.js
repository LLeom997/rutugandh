import { NextResponse } from "next/server";
import connect from "../../../db";
import Plant from "../../../models/Plant";

export const GET = async (req) => {
  try {
    await connect();

    // Fetch the posts from the database
    const posts = await Plant.find({});

    // Return the posts as a JSON response
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch {
    // Check the error and return appropriate response
    return new NextResponse("Database connection error");
  }
};
