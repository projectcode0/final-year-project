function redirectToForm(type) {
    let targetUrl = '';

    if (type === 'customer') {
        targetUrl = '../login-forms/customer-login.html';
    } else if (type === 'restaurant') {
        targetUrl = '../login-forms/restaurant-login.html';
    } else if (type === 'driver') {
        targetUrl = '../login-forms/driver-login.html';
    }

    // Redirect to the respective login form
    window.location.href = targetUrl;
}
