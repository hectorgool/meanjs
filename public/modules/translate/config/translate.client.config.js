'use strict';

// Configuring the Translate module
angular.module('translate', ['pascalprecht.translate'] ).config(function($translateProvider) {

    $translateProvider.translations('en', {

        SEARCH_PLACEHOLDER: 'I\'m searching for...',
        ITEM_NEW: 'New Item',
        ITEM_NAME_LABEL : 'Name',
        ITEM_NAME_PLACEHOLDER : 'Ej: Mascara del Santo',
        ITEM_PRICE_LABEL: 'Price',
        ITEM_PRICE_PLACEHOLDER: 'Ej: 10.00',
        ITEM_SKU_LABEL: 'SKU',
        ITEM_SKU_PLACEHOLDER: 'Ej: LTAFD',
        ITEM_WEIGHT_LABEL: 'Weight (Kg)',
        ITEM_WEIGHT_PLACEHOLDER: 'Ej: 0.5',
        ITEM_DESCRIPTION_LABEL: 'Description',
        ITEM_DESCRIPTION_PLACEHOLDER: 'Write your Description',
        ITEM_SEND_BUTTON: 'Send Item',
        ITEM_EDIT: 'Edit Item',
        //SIGNUP
        SIGNUP_TITLE: 'SignUp',
        OR_CREATE_AN_ACCOUNT : 'Or create an account',
        FIRST_NAME: 'First Name',
        FIRSTNAME_PLACEHOLDER: 'Ej: Rodolfo',
        LAST_NAME: 'Last Name',
        LASTNAME_PLACEHOLDER: 'Ej: Guzman Huerta',
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Ej: elsanto@santo.com',
        USERNAME: 'Username',
        USERNAME_PLACEHOLDER: 'Ej: Santo',
        PASSWORD: 'Password',
        PASSWORD_PLACEHOLDER: 'Ej: xxxxxxxx',
        SIGNUP: 'SignUp',
        OR: 'Or',
        SIGNIN: 'SignIn',
        FORGOT_PASSWORD: 'Forgot your password?',
        OR_WITH_YOUR_ACCOUNT: 'Or with your account',
        MY_CART: 'My Cart',
        SUMMARY: 'Summary',
        SUBTOTAL: 'Subtotal',
        ESTIMATED_SHIPPING: 'Estimated Shipping',
        TOTAL: 'Total',
        CHECK_OUT: 'Check Out',
        CONTINUE_SHOPPING: 'Continue Shopping',
        //CHANGE_PASSWORD
        CHANGE_YOUR_PASSWORD: 'Change your Password',
        CURRENT_PASSWORD: 'Current Password',
        NEW_PASSWORD: 'New Password',
        VERIFY_PASSWORD: 'Verify Password',
        SAVE_PASSWORD: 'Save Password',
        PASSWORD_CHANGED_SUCCESSFULLY: 'Password Changed Successfully',
        EDIT_YOUR_PROFILE: 'Edit Your Profile',
        SAVE_PROFILE: 'Save Profile',
        PROFILE_SAVED_SUCCESSFULLY: 'Profile Saved Successfully',
        ITEM_IMAGES_LABEL: 'Images',
        ITEM_IMAGES_PLACEHOLDER: 'pic1.png'

    });

    $translateProvider.translations('es', {

        SEARCH_PLACEHOLDER: 'I\'m searching for...',
        ITEM_NEW: 'New Item',
        ITEM_NAME_LABEL : 'Name',
        ITEM_NAME_PLACEHOLDER : 'Ej: Mascara del Santo',
        ITEM_PRICE_LABEL: 'Price',
        ITEM_PRICE_PLACEHOLDER: 'Ej: 10.00',
        ITEM_SKU_LABEL: 'SKU',
        ITEM_SKU_PLACEHOLDER: 'Ej: LTAFD',
        ITEM_WEIGHT_LABEL: 'Weight (Kg)',
        ITEM_WEIGHT_PLACEHOLDER: 'Ej: 0.5',
        ITEM_DESCRIPTION_LABEL: 'Description',
        ITEM_DESCRIPTION_PLACEHOLDER: 'Write your Description',
        ITEM_SEND_BUTTON: 'Send Item',
        //SIGNUP
        SIGNUP_TITLE: 'SignUp',
        OR_CREATE_AN_ACCOUNT : 'Or create an account',
        FIRST_NAME: 'First Name',
        FIRSTNAME_PLACEHOLDER: 'Ej: Rodolfo',
        LAST_NAME: 'Last Name',
        LASTNAME_PLACEHOLDER: 'Ej: Guzman Huerta',
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Ej: elsanto@santo.com',
        USERNAME: 'Username',
        USERNAME_PLACEHOLDER: 'Ej: Santo',
        PASSWORD: 'Password',
        PASSWORD_PLACEHOLDER: 'Ej: xxxxxxxx',
        SIGNUP: 'SignUp',
        OR: 'Or',
        SIGNIN: 'SignIn',
        FORGOT_PASSWORD: 'Forgot your password?',
        OR_WITH_YOUR_ACCOUNT: 'Or with your account'

    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
  
});