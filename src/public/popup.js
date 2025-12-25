document.addEventListener("DOMContentLoaded", function () {
    // Function to get a cookie by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Check if the popup has already been shown
    if (!getCookie('popupShown')) {
        // Show the popup after 2 seconds
        setTimeout(function () {
            document.getElementById("popup").classList.add("show");
        }, 2000);
    }

    // Add event listener to close button
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("popup").classList.remove("show");
    });

    // Add event listener to "No more reminders today" button
    document.getElementById("noReminders").addEventListener("click", function () {
        setCookie('popupShown', 'true', 1); // Set the cookie to expire in 1 day
        document.getElementById("popup").classList.remove("show");
    });
});

const depositButtons = document.querySelectorAll('.deposit-button');
depositButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        window.location.href = '/wallet/recharge';
    });
});

const activityButton = document.querySelector('.activity-button');
activityButton.addEventListener('click', function () {
    window.location.href = '/checkIn';
});
