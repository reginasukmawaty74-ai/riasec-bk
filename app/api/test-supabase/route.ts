import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("students")
    .select("*");

  if (error) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }

  return NextResponse.json({
    status: "success",
    data,
  });
}