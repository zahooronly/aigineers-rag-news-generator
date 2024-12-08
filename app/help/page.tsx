import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            How to Use RAG News Generator
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get started with our AI-powered content creation tool
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Quick Start Guide</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300">
              <li>Enter your query in the input field on the home page.</li>
              <li>Select the desired tone for your content from the dropdown menu.</li>
              <li>Choose the style or platform for which you want to generate content.</li>
              <li>Click the "Generate Content" button to create your customized content.</li>
              <li>Review the generated content in the output section.</li>
              <li>Use the tabs to preview different content formats (when available).</li>
              <li>Download or share your content using the provided buttons.</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-gray-900 dark:text-white px-6 py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            If you encounter any issues or have questions not covered here, please contact our support team at{' '}
            <a href="mailto:support@ragnewsgenerator.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@ragnewsgenerator.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "What types of content can I generate?",
    answer: "You can generate various types of content including social media posts, blog articles, video scripts, and more. The tool is versatile and can be adapted to different content needs."
  },
  {
    question: "How does the AI ensure the content is relevant and accurate?",
    answer: "Our AI uses advanced language models and retrieval-augmented generation techniques to ensure the content is contextually relevant. However, we always recommend reviewing and fact-checking the generated content before publishing."
  },
  {
    question: "Can I edit the generated content?",
    answer: "Yes, the generated content is fully editable. You can use it as a starting point and modify it to better suit your needs or brand voice."
  },
  {
    question: "Is there a limit to how much content I can generate?",
    answer: "The amount of content you can generate depends on your subscription plan. Please check our pricing page for more details on usage limits."
  },
  {
    question: "How do I ensure the generated content matches my brand voice?",
    answer: "You can use the tone and style selectors to guide the AI in generating content that matches your brand voice. With practice, you'll find the right combination that works best for your brand."
  }
]

