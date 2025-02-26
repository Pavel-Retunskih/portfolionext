import {NextResponse} from "next/server";
import {pages} from "@/app/api/data/data";

export async function GET() {

  return NextResponse.json({pages})
}