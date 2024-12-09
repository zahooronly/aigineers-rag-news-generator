/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import { ContentGenerationInput } from "@/utils/validation";

interface GeneratedContent {
  [key: string]: any;
}

interface ContentGenerationError {
  message: string;
  details?: Record<string, string[]>;
}

export function useContentGeneration() {
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ContentGenerationError | null>(null);

  const generateContent = async (input: ContentGenerationInput) => {
    setLoading(true);
    setError(null);
    setContent(null);

    try {
      const response = await axios.post(
        "https://search-topic-hackathone-production.up.railway.app/generate-content/",
        input
      );
      setContent(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError({
          message: err.response?.data?.error || "Failed to generate content",
          details: err.response?.data?.details,
        });
      } else {
        setError({ message: "An unexpected error occurred" });
      }
    } finally {
      setLoading(false);
    }
  };

  return { content, loading, error, generateContent };
}
