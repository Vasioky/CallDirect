chrome.contextMenus.create({
    "title": "Call This",
    "contexts": ["selection", "link"],
    "onclick": clickHandler
});

function clickHandler() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, function (selection) {
        //todo: add store to azure table
    });
}