"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useContentGeneration } from "../hooks/useContentGeneration";
import Image from "next/image";
import { Loader } from "./Loader";

export default function OutputSection() {
  const { content, loading, error } = useContentGeneration();

  if (loading) {
    return (
      <Card className="mt-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <Loader />
          <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
            Generating content...
          </p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="mt-8 bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700 rounded-2xl">
        <CardContent className="p-8">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
            Error
          </h3>
          <p className="text-red-600 dark:text-red-300">{error.message}</p>
          {error.details && (
            <ul className="mt-2 list-disc list-inside text-red-600 dark:text-red-300">
              {Object.entries(error.details).map(([field, messages]) => (
                <li key={field}>
                  {field}: {messages.join(", ")}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <Card className="mt-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Generated Content
        </h2>
        <div className="space-y-6">
          {Object.entries(content).map(([key, value]) => (
            <div key={key}>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
                {key.replace("_", " ")}:
              </h3>
              {typeof value === "string" && value.startsWith("http") ? (
                <div className="relative h-64 w-full">
                  <Image
                    src={value}
                    alt={`Generated ${key}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              ) : (
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                  {key === "video" && value === true
                    ? "Video generation feature is not available yet due to paid APIs"
                    : JSON.stringify(value, null, 2)}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-50 dark:bg-gray-700 p-6">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Download
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
