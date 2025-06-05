chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith("https://www.notion.so/")) {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
        });
    } else {
        console.log("Not a Notion page.");
    }
});
