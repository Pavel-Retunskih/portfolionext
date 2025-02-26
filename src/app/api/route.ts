import {NextResponse} from "next/server";
import {pages} from "@/app/api/data/data";

export async function GET(request: Request) {

  return NextResponse.json({pages})
}