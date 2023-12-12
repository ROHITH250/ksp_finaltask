document.addEventListener("DOMContentLoaded", function () {
    // Sample product data
    const products = [
        {
            name: "Wraith",
            price: 480350,
            image: "C:\\Users\\Rohith\\Desktop\\rr.jpeg",
        },
        {
            name: "Phantom 8",
            price: 460000,
            image: "C:\\Users\\Rohith\\Desktop\\phantom.jpg",
        },
        {
            name: "Sweptail",
            price: 12800000,
            image: "C:\\Users\\Rohith\\Desktop\\sweptail.jpg",
            width : 20,
        },
        {
            name: "Cullinan",
            price: 376750,
            image: "C:\\Users\\Rohith\\Desktop\\cullinan.jpg",
            width : 20,
        },
        {
            name: "Gost",
            price: 340500,
            image: "C:\\Users\\Rohith\\Desktop\\gost.jpg",
            width : 20,
        },
    ];

    const productsContainer = document.getElementById("products");

    // Render product cards
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <a href="#" class="button">Add to Cart</a>
        `;

        productsContainer.appendChild(card);
    });
    
});
