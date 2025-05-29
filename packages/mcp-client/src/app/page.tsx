import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full bg-blue-100 p-4">
            <MessageCircle className="h-12 w-12 text-blue-600" />
            <div className="absolute -top-1 -right-1 rounded-full bg-purple-100 p-1">
              <Sparkles className="h-4 w-4 text-purple-600" />
            </div>
          </div>
        </div>

        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
          AI Chat Assistant
        </h1>

        <p className="mb-8 text-xl leading-relaxed text-gray-600">
          Experience seamless conversations with our intelligent AI assistant.
          Get instant responses, creative ideas, and helpful solutions.
        </p>

        <div className="space-y-4">
          <Link href="/chat">
            <Button
              size="lg"
              className="transform rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-600 hover:shadow-xl"
            >
              Start Chatting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Instant Responses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Smart Conversations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>Always Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
