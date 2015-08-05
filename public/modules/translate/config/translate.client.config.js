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