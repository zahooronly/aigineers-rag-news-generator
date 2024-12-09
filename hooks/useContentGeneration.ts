/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

interface ContentGenerationParams {
  query: string;
  tone: string;
  style: string;
}

export function useContentGeneration() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateContent = async ({
    query,
    tone,
    style,
  }: ContentGenerationParams) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, tone, style }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const data = await response.json();
      setContent(data.content);
    } catch (err) {
      setError("An error occurred while generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { content, loading, error, generateContent };
}
