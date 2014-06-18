(function () {
    var phonenumber = 'phonenumber';
    chrome.contextMenus.create({
        "title": "Call This",
        "contexts": ["selection", "link"],
        "onclick": function () {
            chrome.tabs.executeScript({
                code: "window.getSelection().toString();"
            }, function (selection) {
                //todo: add phone regEx to validate phone
                if (selection && selection.length) {
                    var client = new WindowsAzure.MobileServiceClient("https://calldirect.azure-mobile.net/", "pzeLioYQmuYwqPWnQwNneQfBGWIBJv49");

                    var item = {
                        acountname: localStorage[phonenumber],
                        phonetocall: selection.toString(),
                        issenttocaller: false
                    };

                    client.getTable("Calls").insert(item);
                }
            });
        }
    });
})();

