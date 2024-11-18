import { products } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";
import BackButton from "@/components/BackButton";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Modern Store`,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-indigo-600 mb-4">{product.category}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-indigo-600">
                ${product.price}
              </span>
              <AddToCartButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}