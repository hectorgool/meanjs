'use strict';

// Configuring the Translate module
angular.module('translate', ['pascalprecht.translate'] ).config(function($translateProvider) {

    $translateProvider.translations('en', {
        SEARCH_PLACEHOLDER: 'I\'m searching for...',
        TEST: 'Test!!!',
        ITEM_CREATE: 'Create Item',
        SIGNUP: 'SignUp',
        ITEM_NAME: 'Name',
        ITEM_REQUIRED: 'Required !',
        ITEM_SKU: 'Sku',
        ITEM_PRICE: 'Price',
        ITEM_COST: 'Cost',
        ITEM_ACTIVE: 'Active',
        ITEM_CREATE: 'Create Item',
        ITEM_DESCRIPTION: 'Description',
        ITEM_THIS_FIELD_IS_INVALID: 'This field is invalid!',
        ITEM_THIS_FIELD_IS_NOT_NUMBER: 'Not valid number!',
        ITEM_FIELD_MAX_LENGTH: 'Max Length!'
    });

    $translateProvider.translations('es', {
        SEARCH_PLACEHOLDER: 'Estoy buscando...',
        TEST: 'Prueba!!!',
        ITEM_CREATE: 'Crear Artículo',
        SIGNUP: 'Registrate',
        ITEM_NAME: 'Nombre',
        ITEM_REQUIRED: 'Requerido !',
        ITEM_SKU: 'Sku',
        ITEM_PRICE: 'Precio',
        ITEM_COST: 'Costo',
        ITEM_ACTIVE: 'Publicar',
        ITEM_CREATE: 'Crear Artículo',
        ITEM_DESCRIPTION: 'Descripción',
        ITEM_THIS_FIELD_IS_INVALID: 'Este campo no es válido!',
        ITEM_THIS_FIELD_IS_NOT_NUMBER: 'Este campo no es numérico!',
        ITEM_FIELD_MAX_LENGTH: 'Max Length!'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
  
});