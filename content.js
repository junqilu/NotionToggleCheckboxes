console.log("✅ Notion script injected");

if (!document.getElementById("notion-toggle-checkboxes")) {
    const button = document.createElement("button");
    button.id = "notion-toggle-checkboxes";
    button.textContent = "Uncheck All Checkboxes";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.zIndex = "9999";
    button.style.padding = "10px 16px";
    button.style.backgroundColor = "transparent"; // Transparent background
    button.style.color = "black"; // Black text color
    button.style.border = "1px solid #2F76DA"; // Blue border
    button.style.backdropFilter = "blur(4px)";  // for a glassy look
    button.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
    button.style.transition = "background-color 0.2s ease";


    button.style.borderRadius = "6px";
    button.style.cursor = "pointer";
    button.style.fontSize = "14px";

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "rgba(47, 118, 218, 0.1)";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "transparent";
    });

    button.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let count = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) { // Uncheck all checkboxes that have been checked before
                checkbox.click();
                count++;
            }
        });
        console.log(`Unchecked ${count} checkbox(es)`);
    });

    document.body.appendChild(button);
}
