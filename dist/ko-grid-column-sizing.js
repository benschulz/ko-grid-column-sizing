/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function b(d){return function(a){return a}(function(a,c){c.defineExtension("ko-grid-column-sizing",{t:function(){this.isResizable=this.k=function(a){return a.userDefined}}});return c.declareExtensionAlias("columnSizing","ko-grid-column-sizing")}({},d))}"function"===typeof define&&define.amd?define(["ko-grid","ko-data-source","ko-indexed-repeat","knockout"],b):window["ko-grid-column-sizing"]=b(window.ko.bindingHandlers.grid);