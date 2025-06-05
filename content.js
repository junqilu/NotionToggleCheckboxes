if (!document.getElementById("notion-toggle-button")) {
    const button = document.createElement("div");
    button.id = "notion-toggle-button";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.zIndex = "9999";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.overflow = "hidden";
    button.style.width = "40px";  // compact default width
    button.style.height = "40px";
    button.style.padding = "0 12px";
    button.style.borderRadius = "20px";
    button.style.backgroundColor = "transparent";
    button.style.border = "1px solid #2F76DA";
    button.style.cursor = "pointer";
    button.style.transition = "width 0.3s ease, background-color 0.2s ease";
    button.style.color = "black";
    button.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
    button.style.backdropFilter = "blur(4px)";
    button.title = "Uncheck all checkboxes";

    // icon image
    const icon = document.createElement("img");
    icon.src = chrome.runtime.getURL("icons/icon16.png");
    icon.alt = "icon";
    icon.style.width = "24px";
    icon.style.height = "24px";
    icon.style.flexShrink = "0";

    // label text
    const label = document.createElement("span");
    label.textContent = " Uncheck All Boxes";
    label.style.whiteSpace = "nowrap";
    label.style.marginLeft = "8px";
    label.style.opacity = "0";
    label.style.transition = "opacity 0.2s ease";
    label.style.fontSize = "14px";

    button.appendChild(icon);
    button.appendChild(label);
    document.body.appendChild(button);

    // Expand on hover
    button.addEventListener("mouseenter", () => {
        button.style.width = "200px";
        button.style.backgroundColor = "rgba(47, 118, 218, 0.1)";
        label.style.opacity = "1";
    });

    // Shrink when mouse leaves
    button.addEventListener("mouseleave", () => {
        button.style.width = "40px";
        button.style.backgroundColor = "transparent";
        label.style.opacity = "0";
    });

    // Click logic: uncheck all checked boxes
    button.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let count = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkbox.click();
                count++;
            }
        });
        console.log(`✅ Unchecked ${count} checkbox(es)`);
    });
}
