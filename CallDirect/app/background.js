console.log('test');
chrome.contextMenus.create({
    "title": "Call This",
    "contexts": ["page", "selection", "link"],
    "onclick": clickHandler
});

function clickHandler() {
    cosole.log('click');
}