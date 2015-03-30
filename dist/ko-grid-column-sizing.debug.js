/**
 * @license Copyright (c) 2015, Ben Schulz
 * License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
 */
;(function(factory) {
    if (typeof define === 'function' && define['amd'])
        define(['ko-grid', 'ko-data-source', 'ko-indexed-repeat', 'knockout'], factory);
    else
        window['ko-grid-column-sizing'] = factory(window.ko.bindingHandlers['grid']);
} (function(ko_grid) {
var ko_grid_column_sizing_column_sizing, ko_grid_column_sizing;

ko_grid_column_sizing_column_sizing = function (module, koGrid) {
  var extensionId = 'ko-grid-column-sizing'.indexOf('/') < 0 ? 'ko-grid-column-sizing' : 'ko-grid-column-sizing'.substring(0, 'ko-grid-column-sizing'.indexOf('/'));
  koGrid.defineExtension(extensionId, {
    Constructor: function ColumnSizingExtension() {
      this.isResizable = function (column) {
        return column.userDefined;
      };
      this['isResizable'] = this.isResizable;
    }
  });
  return koGrid.declareExtensionAlias('columnSizing', extensionId);
}({}, ko_grid);
ko_grid_column_sizing = function (main) {
  return main;
}(ko_grid_column_sizing_column_sizing);return ko_grid_column_sizing;
}));