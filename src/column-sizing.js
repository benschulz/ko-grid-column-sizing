'use strict';

define(['module', 'ko-grid'], function (module, koGrid) {
    var extensionId = module.id.indexOf('/') < 0 ? module.id : module.id.substring(0, module.id.indexOf('/'));

    koGrid.defineExtension(extensionId, {
        Constructor: function ColumnSizingExtension() {
            this.isResizable = function (column) {
                return column.userDefined;
            };
            this['isResizable'] = this.isResizable;
        }
    });

    return koGrid.declareExtensionAlias('columnSizing', extensionId);
});
