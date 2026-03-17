// Format price to INR or any currency
export const formatPrice = (amount, currency = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amount);
};

// Capitalize first letter of a string
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Generate a random unique ID (for cart items, orders, etc.)
export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

// Get current date in YYYY-MM-DD format
export const getCurrentDate = () => {
  const d = new Date();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
};

// Sort products by price or rating
export const sortProducts = (products, type = "price") => {
  return products.sort((a, b) => {
    if (type === "price") return a.price - b.price;
    if (type === "rating") return b.rating - a.rating;
    return 0;
  });
};

// Filter products by category
export const filterByCategory = (products, category) => {
  if (!category) return products;
  return products.filter((prod) => prod.category === category);
};