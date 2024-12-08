# RAG News Generator

RAG News Generator is an AI-powered content creation tool that uses Retrieval-Augmented Generation (RAG) to produce high-quality, context-aware content for various platforms and styles.

## Features

- AI-driven content generation
- Customizable tone and style options
- Support for multiple content types (social media posts, blog articles, video scripts, etc.)
- Real-time API integration with loading indicators
- Responsive design with dark mode support
- Download and share functionality for generated content

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm 6.x or later

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/rag-news-generator.git
   cd rag-news-generator
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Set up environment variables:
   Create a \`.env.local\` file in the root directory and add the following:
   \`\`\`
   NEXT_PUBLIC_RAG_API_URL=your_api_url_here
   \`\`\`

4. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter your query in the input field on the home page.
2. Select the desired tone for your content from the dropdown menu.
3. Choose the style or platform for which you want to generate content.
4. Click the "Generate Content" button to create your customized content.
5. Review the generated content in the output section.
6. Use the tabs to preview different content formats (when available).
7. Download or share your content using the provided buttons.

## Environment Variables

- \`NEXT_PUBLIC_RAG_API_URL\`: The URL of your RAG API endpoint.

## Project Structure

\`\`\`
rag-news-generator/
├── app/
│ ├── components/
│ │ ├── Footer.tsx
│ │ ├── Header.tsx
│ │ ├── ModeToggle.tsx
│ │ ├── OutputSection.tsx
│ │ └── QueryForm.tsx
│ ├── hooks/
│ │ └── useContentGeneration.ts
│ ├── about/
│ │ └── page.tsx
│ ├── help/
│ │ └── page.tsx
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── public/
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
\`\`\`

## Contributing

We welcome contributions to the RAG News Generator project! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: \`git checkout -b feature/your-feature-name\`
3. Make your changes and commit them: \`git commit -m 'Add some feature'\`
4. Push to the branch: \`git push origin feature/your-feature-name\`
5. Submit a pull request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js for the React framework
- Tailwind CSS for styling
- shadcn/ui for UI components
- Lucide React for icons

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository or contact our support team at support@ragnewsgenerator.com.
\`\`\`
