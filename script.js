document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".fondo");
    const tabPanels = document.querySelectorAll(".panel");
    const tabBackgrounds = document.querySelectorAll("b"); 

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("activo"));
            tabPanels.forEach(panel => panel.classList.remove("activo"));
            tabBackgrounds.forEach(bg => bg.classList.remove("activo"));

            button.classList.add("activo");
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("activo");

            const background = document.querySelector(`b.${tabId}`);
            if (background) {
                background.classList.add("activo");
            }
        });
    });
});