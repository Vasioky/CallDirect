/// <reference path="MobileServices.Web-1.1.3.min.js" />
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var phonenumber = 'phonenumber';
        var btn = document.getElementById('callBtn');

        btn.addEventListener('click', function () {

            var phoneToCall = document.getElementById('phone').value;
            if (phoneToCall && phoneToCall.length) {
                var client = new WindowsAzure.MobileServiceClient("https://calldirect.azure-mobile.net/", "pzeLioYQmuYwqPWnQwNneQfBGWIBJv49");
                var item = {
                    acountname: localStorage[phonenumber],
                    phonetocall: phoneToCall,
                    issenttocaller: false
                };

                client.getTable("Calls").insert(item);
            }
        });
    });
})()