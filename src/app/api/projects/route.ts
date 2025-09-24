import {NextResponse} from "next/server";
import {projects} from "@/app/api/projects/data/data";

export async function GET() {
  return NextResponse.json(projects)

}