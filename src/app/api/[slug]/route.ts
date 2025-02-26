import {NextResponse} from 'next/server';
import {pages} from "@/app/api/data/data";

export async function GET(request: Request, {params}: { params: Promise<{ slug: string }> }) {
  const {slug} = await params
  let pageData
  if (slug) {
    pageData = pages.find((page) => page.title === slug);
  }
  return NextResponse.json({pageData})
}