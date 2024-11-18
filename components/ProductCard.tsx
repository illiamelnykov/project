import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-white h-full rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <span className="text-lg font-bold text-indigo-600">
              ${product.price}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}