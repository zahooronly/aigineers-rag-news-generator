"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useContentGeneration } from '../hooks/useContentGeneration'

export default function QueryForm() {
  const [query, setQuery] = useState('')
  const [tone, setTone] = useState('')
  const [style, setStyle] = useState('')
  const { generateContent } = useContentGeneration()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await generateContent({ query, tone, style })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="query" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Query
        </label>
        <Input
          id="query"
          type="text"
          placeholder="Enter your query (e.g., Create a LinkedIn post about AI trends today)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Tone
          </label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger id="tone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="conversational">Conversational</SelectItem>
              <SelectItem value="humorous">Humorous</SelectItem>
              <SelectItem value="informative">Informative</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="style" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Style
          </label>
          <Select value={style} onValueChange={setStyle}>
            <SelectTrigger id="style" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="blog">Blog Post</SelectItem>
              <SelectItem value="instagram">Instagram Caption</SelectItem>
              <SelectItem value="video">Video Script</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out">
        Generate Content
      </Button>
    </form>
  )
}

