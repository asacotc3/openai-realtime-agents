import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const apiKey = searchParams.get('apiKey') /*|| process.env.OPENAI_API_KEY*/;
    
    const response = await fetch(
      "https://api.openai.com/v1/realtime/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        //gpt-4o-mini-realtime-preview-2024-12-17
        //gpt-4o-mini-realtime-preview-2024-12-17
        body: JSON.stringify({
          model: "gpt-4o-mini-realtime-preview-2024-12-17",
          voice: "echo"
        }),
      }
    );
    const data = await response.json();
    console.log(data)
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /session:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
