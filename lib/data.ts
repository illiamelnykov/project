export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Desk Lamp",
    description: "Sleek LED desk lamp with adjustable brightness and color temperature",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1000",
    category: "Lighting"
  },
  {
    id: 2,
    name: "Minimalist Watch",
    description: "Classic design with premium leather strap and big display",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "Premium sound quality with active noise cancellation",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Smart coffee maker with programmable settings",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=1000",
    category: "Appliances"
  }
];

export const getProducts = (page: number, limit: number) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const totalPages = Math.ceil(products.length / limit);
  
  return {
    data: products.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      totalPages,
      hasMore: endIndex < products.length
    }
  };
};