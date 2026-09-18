document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("open");

            const isOpen = nav.classList.contains("open");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    /* =====================================================
       FLOATING WHATSAPP BUTTON
    ===================================================== */

    const whatsappNumber = "+919442369945";
    // Enter your WhatsApp number above.
    // Example: 919876543210
    // Do NOT use +, spaces or hyphens.


    const whatsappMessage =
        "Hello, I’m interested in working with SAAF Leather Products.";


    const whatsappButton = document.createElement("a");

    whatsappButton.href =
        "https://wa.me/" +
        whatsappNumber.trim() +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener noreferrer";

    whatsappButton.className = "floating-whatsapp";

    whatsappButton.setAttribute(
        "aria-label",
        "Chat with SAAF Leather Products on WhatsApp"
    );

    whatsappButton.innerHTML = `
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M19.11 17.32c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
            <path d="M16.03 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.72 6.39L3.13 28.8l6.58-1.72a12.75 12.75 0 0 0 6.32 1.68h.01c7.04 0 12.77-5.73 12.77-12.78S23.07 3.2 16.03 3.2zm0 23.43h-.01a10.61 10.61 0 0 1-5.4-1.47l-.39-.23-3.9 1.02 1.04-3.8-.25-.39a10.63 10.63 0 1 1 8.91 4.87z"/>
        </svg>
    `;

    document.body.appendChild(whatsappButton);

});
