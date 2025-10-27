const menuItems = [
  // Appetizers
  {
    name: "Spring Rolls",
    category: "appetizer",
    price: "$5",
    desc: "Crispy rolls stuffed with fresh veggies.",
    img: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Bruschetta",
    category: "appetizer",
    price: "$6",
    desc: "Grilled bread topped with tomato, basil, and olive oil.",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Garlic Bread",
    category: "appetizer",
    price: "$4",
    desc: "Toasted baguette slices brushed with garlic butter.",
    img: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Stuffed Mushrooms",
    category: "appetizer",
    price: "$7",
    desc: "Mushrooms filled with creamy cheese and herbs.",
    img: "https://images.unsplash.com/photo-1622268805718-ca073548d4ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3R1ZmZlZCUyME11c2hyb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Paneer Tikka",
    category: "appetizer",
    price: "$8",
    desc: "Spiced paneer cubes grilled to perfection.",
    img: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },

  // Main Courses
  {
    name: "Grilled Chicken",
    category: "main",
    price: "$12",
    desc: "Juicy grilled chicken with herbs and spices.",
    img: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JpbGxlZCUyMENoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Pasta Alfredo",
    category: "main",
    price: "$10",
    desc: "Creamy pasta tossed in white sauce and parmesan.",
    img: "https://images.unsplash.com/photo-1686565510178-52c69af8be37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGElMjBhbGZyZWRvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Margherita Pizza",
    category: "main",
    price: "$9",
    desc: "Classic pizza with mozzarella, tomato, and basil.",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Butter Chicken",
    category: "main",
    price: "$11",
    desc: "Tender chicken in rich buttery tomato gravy.",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Veg Biryani",
    category: "main",
    price: "$9",
    desc: "Fragrant rice cooked with vegetables and spices.",
    img: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },

  //Desserts
  {
    name: "Chocolate Lava Cake",
    category: "dessert",
    price: "$6",
    desc: "Warm chocolate cake with molten center.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cheesecake",
    category: "dessert",
    price: "$7",
    desc: "Creamy cheesecake with a graham cracker crust.",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Brownie Sundae",
    category: "dessert",
    price: "$8",
    desc: "Chocolate brownie topped with ice cream and syrup.",
    img: "https://images.unsplash.com/photo-1649654317876-58fac5331cd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJvd25pZSUyMFN1bmRhZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Tiramisu",
    category: "dessert",
    price: "$9",
    desc: "Classic Italian dessert with coffee-soaked layers.",
    img: "https://plus.unsplash.com/premium_photo-1695028378225-97fbe39df62a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Fruit Tart",
    category: "dessert",
    price: "$6",
    desc: "Buttery crust filled with custard and fresh fruits.",
    img: "https://plus.unsplash.com/premium_photo-1689596510101-c29d8207951a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjB0cmF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },

  //Beverages
  {
    name: "Lemonade",
    category: "beverage",
    price: "$3",
    desc: "Freshly squeezed lemon juice with mint.",
    img: "https://plus.unsplash.com/premium_photo-1664391804722-cb3f2d439d7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Iced Coffee",
    category: "beverage",
    price: "$4",
    desc: "Cold brew coffee with milk and ice.",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mango Smoothie",
    category: "beverage",
    price: "$5",
    desc: "Creamy mango smoothie with yogurt.",
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hot Chocolate",
    category: "beverage",
    price: "$4",
    desc: "Rich cocoa drink topped with whipped cream.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Green Tea",
    category: "beverage",
    price: "$3",
    desc: "Light and refreshing green tea infusion.",
    img: "https://plus.unsplash.com/premium_photo-1694540110881-84add98c0a75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  }
];

const container = document.getElementById("menu-items");

function displayMenuItems(items) {
  container.innerHTML = "";
  items.forEach(item => {
    container.innerHTML += `
      <div class="col-md-3 menu-item" data-category="${item.category}">
        <img src="${item.img}" alt="${item.name}">
        <h5 class="mt-2">${item.name}</h5>
        <p>${item.desc}</p>
        <p><strong>${item.price}</strong></p>
      </div>
    `;
  });
}

// Show all items initially
displayMenuItems(menuItems);

// Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    if (category === "all") {
      displayMenuItems(menuItems);
    } else {
      const filtered = menuItems.filter(item => item.category === category);
      displayMenuItems(filtered);
    }
  });
});
