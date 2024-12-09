import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

interface OutputSectionProps {
  content: {
    textPost: string
    imageUrl?: string
  }
}

export default function OutputSection({ content }: OutputSectionProps) {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Generated Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Text Post:</h3>
            <p className="whitespace-pre-wrap">{content.textPost}</p>
          </div>
          {content.imageUrl && (
            <div>
              <h3 className="font-semibold mb-2">Generated Image:</h3>
              <Image src={content.imageUrl} alt="Generated image" width={500} height={300} className="rounded-lg" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

