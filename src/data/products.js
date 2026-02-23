const products = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Oversized White Tee",
    price: 899,
    image: "https://images.unsplash.com/photo-1722310752951-4d459d28c678?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 1999,
    image: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    price: 1499,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    id: 5,
    name: "Casual Check Shirt",
    price: 1199,
    image: "https://images.unsplash.com/photo-1630355734650-55fe91e1e5c7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Printed Hoodie",
    price: 1799,
    image: "https://images.unsplash.com/photo-1713742628722-b5068de6b211?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Formal Blazer",
    price: 2999,
    image: "https://images.unsplash.com/photo-1592343516109-362f7bd871aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    name: "Summer Shorts",
    price: 699,
    image: "https://images.unsplash.com/photo-1649339699922-5b678c23b242?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    name: "Leather Jacket",
    price: 3499,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    name: "Streetwear Cargo Pants",
    price: 1899,
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 11,
    name: "Minimal Polo T-Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1671438118097-479e63198629?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    name: "Winter Sweatshirt",
    price: 1599,
    image: "https://images.unsplash.com/photo-1607160199580-1b0c9b736b66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 13,
    name: "Classic Kurta",
    price: 1299,
    image: "https://images.unsplash.com/photo-1622780432053-767528938f34?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 14,
    name: "Sports Track Suit",
    price: 2199,
    image: "https://images.unsplash.com/photo-1644718847248-bdd7b044def9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 15,
    name: "Casual Jeans",
    price: 2499,
    image: "https://plus.unsplash.com/premium_photo-1764329344255-a990653fa9da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 16,
    name: "Luxury Suit Set",
    price: 4999,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
  }
];

export default products;