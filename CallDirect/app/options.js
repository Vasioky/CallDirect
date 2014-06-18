(function () {
    var phonenumber = 'phonenumber';

    function saveNumber() {
        var el = document.getElementById(phonenumber);
        localStorage[phonenumber] = el.value;
        //TODO:add success message
    }

    function restore_options() {
        var el = document.getElementById('btnSave');

        el.addEventListener('click', saveNumber);

        document.getElementById(phonenumber).value = localStorage[phonenumber];
    }
    document.addEventListener('DOMContentLoaded', restore_options);
})();