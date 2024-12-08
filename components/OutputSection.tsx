"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useContentGeneration } from "../hooks/useContentGeneration";

export default function OutputSection() {
  const { content, loading, error, generateContent } = useContentGeneration();

  if (loading) {
    return (
      <div className="text-center mt-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Generating content...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="mt-8 bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700">
        <CardContent className="pt-6">
          <p className="text-red-600 dark:text-red-300">{error}</p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => generateContent({ query: "", tone: "", style: "" })}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Retry
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <Card className="mt-8 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Generated Content
        </h2>
        <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
          {content}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-50 dark:bg-gray-700 p-4">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Download
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
