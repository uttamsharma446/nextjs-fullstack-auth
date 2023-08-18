import { connect } from "@/dbConfig/dbconfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    console.log(request.body);
    const _id = await getDataFromToken(request);
    const user = await User.findById({ _id }).select("username");
    return NextResponse.json({
      data: user,
      failed: false,
    });
  } catch (err) {
    return NextResponse.json({
      error: err,
      failed: false,
    });
    //
  }
}
