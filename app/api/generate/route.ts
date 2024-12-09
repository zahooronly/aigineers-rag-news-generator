import { NextResponse } from "next/server";
import axios from "axios";
import {
  validateContentGenerationInput,
  ValidationError,
} from "@/utils/validation";

const API_URL =
  "https://search-topic-hackathone-production.up.railway.app/generate-content/";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedInput = validateContentGenerationInput(body);

    const response = await axios.post(API_URL, {
      topic: validatedInput.topic,
      Platform: validatedInput.platform,
      image: validatedInput.image ? 1 : 0,
      video: validatedInput.video ? 1 : 0,
      meme: validatedInput.meme ? 1 : 0,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    if (axios.isAxiosError(error)) {
      console.error("API request failed:", error.message);
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.error ||
        "An error occurred while generating content";
      return NextResponse.json({ error: message }, { status });
    }

    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
