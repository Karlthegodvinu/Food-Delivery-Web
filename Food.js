document.addEventListener("DOMContentLoaded", () => {
    // Responsive navigation menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav.right ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Smooth scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dynamic Food Items Generation
    const foodItems = [
        { name: "Western Food", image: "assets/western.jpg", link: "Items/western-food.html" },
        { name: "Indian Food", image: "assets/indian.jpg", link: "Items/Indian-Food.html" },
        { name: "Chinese Food", image: "assets/chinese.jpg", link: "chinese-food.html" },
        { name: "Burger", image: "assets/burger.jpg", link: "burger.html" },
        { name: "Pizza", image: "assets/pizza.jpg", link: "pizza.html" },
        { name: "Pasta", image: "assets/pasta.jpg", link: "pasta.html" },
        { name: "Japanese Food", image: "assets/japanese.jpg", link: "japanese.html" }
    ];

    const table = document.querySelector(".items");

    let row;
    foodItems.forEach((item, index) => {
        if (index % 3 === 0) {
            row = document.createElement("tr");
            table.appendChild(row);
        }

        const td = document.createElement("td");
        td.innerHTML = `
            <a href="${item.link}">
                <div class="food-item" style="background-image: url('${item.image}');">
                    <p>${item.name}</p>
                </div>
            </a>
        `;
        row.appendChild(td);
    });

    // Dark Mode Toggle (Optional)
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "Toggle Theme";
    themeToggle.style.cssText = "position: fixed; bottom: 20px; right: 20px; padding: 10px; cursor: pointer;";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Apply Dark Mode Styling
    const darkModeStyles = document.createElement("style");
    darkModeStyles.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: white;
        }
        .dark-mode a {
            color: lightblue;
        }
    `;
    document.head.appendChild(darkModeStyles);
});
