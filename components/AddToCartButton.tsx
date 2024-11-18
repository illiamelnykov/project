"use client";

export default function AddToCartButton() {
  return (
    <button 
      className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
      onClick={() => alert('Added to cart!')}
    >
      Add to Cart
    </button>
  );
}