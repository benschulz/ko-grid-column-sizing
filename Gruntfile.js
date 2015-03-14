'use strict';

module.exports = function (grunt) {
    require('grunt-commons')(grunt, {
        name: 'ko-grid-column-sizing',
        main: 'column-sizing',
        internalMain: 'column-sizing',

        shims: {
            'ko-grid': 'window.ko.bindingHandlers[\'grid\']'
        }
    }).initialize({});
};
