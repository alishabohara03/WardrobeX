import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  {
    name: "Elegant Wool Sweater",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1618354691373-7d9f5ec14f52?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Floral Summer Skirt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1602810317633-c3c4c8366e4e?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Formal Women's Blazer",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1618354691607-c7db6160c7b2?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Chic Midi Dress",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1519741491158-6f4b63f30c4a?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Classic White Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1571867424486-8585e62d6ab4?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Casual Denim Jacket",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1602810317873-d624db6b8b3d?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Pleated Office Skirt",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1588612518731-d56b3f10f256?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Slim Fit Formal Trousers",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1535920527002-9c6bb28e273f?w=800&auto=format&fit=crop&q=60",
  },
];

async function seedDatabase() {
  try {
   
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

  
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); 
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); 
  }
}

seedDatabase();
