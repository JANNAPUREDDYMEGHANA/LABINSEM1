
const products = [
    {
        name: "Wireless Headphones",
        price: 1499,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        name: "Smart Watch",
        price: 2499,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        name: "Running Shoes",
        price: 1999,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        name: "Backpack",
        price: 999,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        name: "Sunglasses",
        price: 799,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        name: "Camera",
        price: 4999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    }
];

const productList = document.getElementById("product-list");
const search = document.getElementById("search");
const category = document.getElementById("category");

function displayProducts(items) {
    productList.innerHTML = "";

    if (items.length === 0) {
        productList.innerHTML =
            '<p class="empty">No products found!</p>';
        return;
    }

    items.forEach(function(product) {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}"
                     alt="${product.name}">

                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price}</p>
                    <span class="category">
                        ${product.category}
                    </span>
                </div>
            </div>
        `;
    });
}

function filterProducts() {
    const searchText = search.value.toLowerCase();
    const selectedCategory = category.value;

    const filtered = products.filter(function(product) {
        const matchesName =
            product.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesName && matchesCategory;
    });

    displayProducts(filtered);
}

search.addEventListener("input", filterProducts);
category.addEventListener("change", filterProducts);

// Display all products when the page opens
displayProducts(products);
