"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContentGeneration } from "../hooks/useContentGeneration";
import {
  contentGenerationSchema,
  ContentGenerationInput,
} from "../utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

export default function QueryForm() {
  const { generateContent, error, loading } = useContentGeneration();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ContentGenerationInput>({
    resolver: zodResolver(contentGenerationSchema),
    defaultValues: {
      topic: "",
      platform: undefined,
      image: false,
      video: false,
      meme: false,
    },
  });

  const onSubmit = (data: ContentGenerationInput) => {
    if (isAnyContentTypeSelected) {
      generateContent(data);
    }
  };

  const watchContentTypes = watch(["image", "video", "meme"]);
  const isAnyContentTypeSelected = watchContentTypes.some(Boolean);

  useEffect(() => {
    if (!isAnyContentTypeSelected) {
      setValue("image", true);
    }
  }, [isAnyContentTypeSelected, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-4">
        <Input
          id="topic"
          {...register("topic")}
          placeholder="Enter your topic"
          className="text-lg py-6 px-4 rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all"
        />
        {errors.topic && (
          <p className="text-sm text-red-500">{errors.topic.message}</p>
        )}
      </div>
      <div className="space-y-4">
        <Controller
          name="platform"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                id="platform"
                className="text-lg py-6 px-4 rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Twitter">Twitter</SelectItem>
                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.platform && (
          <p className="text-sm text-red-500">{errors.platform.message}</p>
        )}
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Content Options</h3>
        <div className="space-y-2">
          {["image", "video", "meme"].map((type) => (
            <div key={type} className="flex items-center justify-between">
              <label htmlFor={type} className="text-sm font-medium capitalize">
                {type}
              </label>
              <Controller
                name={type as "image" | "video" | "meme"}
                control={control}
                render={({ field }) => (
                  <Switch
                    id={type}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            </div>
          ))}
        </div>
        {!isAnyContentTypeSelected && (
          <p className="text-sm text-red-500">
            At least one content type must be selected
          </p>
        )}
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error.message}
            {error.details && (
              <ul className="mt-2 list-disc list-inside">
                {Object.entries(error.details).map(([field, messages]) => (
                  <li key={field}>
                    {field}: {messages.join(", ")}
                  </li>
                ))}
              </ul>
            )}
          </AlertDescription>
        </Alert>
      )}
      <Button
        type="submit"
        className="w-full py-6 text-lg font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 transition-colors"
        disabled={!isAnyContentTypeSelected || loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Content"
        )}
      </Button>
    </form>
  );
}
