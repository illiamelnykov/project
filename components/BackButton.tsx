"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      Back to Products
    </button>
  );
}