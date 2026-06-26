import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log("[Windsor Exterior Pros] Contact form submission:", data);
  return NextResponse.json({ success: true });
}
