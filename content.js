function make_button() {
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
    button.style.padding = "0 6px"; // 6px is the best result to make the icon in the center of the button before the expansion
    button.style.borderRadius = "20px";
    button.style.backgroundColor = "rgb(35,131,226)";
    button.style.border = "2px solid rgb(35,131,226)";
    button.style.cursor = "pointer";
    button.style.transition = "width 0.3s ease, background-color 0.2s ease";
    button.style.color = "black";
    button.style.boxShadow = "0 2px 6px rgba(35,131,226,0.1)";
    button.style.backdropFilter = "blur(4px)";
    button.title = "Uncheck all checkboxes";

    return button;
}

function make_icon() {
    const icon = document.createElement("img");
    icon.src = "https://github.com/junqilu/NotionToggleCheckboxes/blob/main/icons/icon128_white.png?raw=true";
    icon.alt = "icon";
    icon.style.width = "24px";
    icon.style.height = "24px";
    icon.style.flexShrink = "0";

    return icon;
}

function make_label() {
    const label = document.createElement("span");
    label.textContent = " Uncheck All Boxes";
    label.style.whiteSpace = "nowrap";
    label.style.marginLeft = "8px";
    label.style.opacity = "0";
    label.style.transition = "opacity 0.2s ease";
    label.style.fontSize = "14px";

    return label;
}

function make_button_wrapper() {
    let button = make_button();
    let icon = make_icon();
    let label = make_label();

    button.appendChild(icon);
    button.appendChild(label);
    document.body.appendChild(button);

    return {button, icon, label};
}

function mouse_enter_expand_button(button, icon, label) { // Expand on hover
    button.addEventListener("mouseenter", () => {
        icon.src = "https://github.com/junqilu/NotionToggleCheckboxes/blob/main/icons/icon128.png?raw=true";
        button.style.width = "165px"; // This is the width of the button after expansion
        button.style.backgroundColor = "transparent"; // After expansion, the background color will change
        button.style.border = "2px solid black";
        label.style.opacity = "1";
    });
}

function mouse_leave_shrink_button(button, icon, label) {
    button.addEventListener("mouseleave", () => {
        icon.src = "https://github.com/junqilu/NotionToggleCheckboxes/blob/main/icons/icon128_white.png?raw=true";

        button.style.width = "40px";

        button.style.backgroundColor = "rgb(35,131,226)";
        button.style.border = "2px solid rgb(35,131,226)";

        label.style.opacity = "0";
    });
}

function mouse_click_uncheck_boxes(button) {
    button.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let count = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkbox.click();
                count++;
            }
        });
        console.log(`Unchecked ${count} checkbox(es)`);
    });
}

function main() {
    if (!document.getElementById("notion-toggle-button")) {
        let {button, icon, label} = make_button_wrapper();

        mouse_enter_expand_button(button, icon, label);

        mouse_leave_shrink_button(button, icon, label);

        mouse_click_uncheck_boxes(button);
    }
}

main();