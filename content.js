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
    button.style.backgroundColor = "#2F76DA";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "6px";
    button.style.cursor = "pointer";
    button.style.fontSize = "14px";
    button.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";

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
