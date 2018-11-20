'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelTypes = require('babel-types');

var _conditionalClassMerge = require('./conditionalClassMerge');

var _conditionalClassMerge2 = _interopRequireDefault(_conditionalClassMerge);

var _getClassName = require('./getClassName');

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Updates the className value of a JSX element using a provided styleName attribute.
 */
exports.default = (path, styleModuleImportMap, sourceAttribute, destinationName, options) => {
  const resolvedStyleName = (0, _getClassName2.default)(sourceAttribute.value.value, styleModuleImportMap, options);

  const destinationAttribute = path.node.openingElement.attributes.find(attribute => {
    return typeof attribute.name !== 'undefined' && attribute.name.name === destinationName;
  });

  if (destinationAttribute) {
    if ((0, _babelTypes.isStringLiteral)(destinationAttribute.value)) {
      destinationAttribute.value.value += ' ' + resolvedStyleName;
    } else if ((0, _babelTypes.isJSXExpressionContainer)(destinationAttribute.value)) {
      destinationAttribute.value.expression = (0, _conditionalClassMerge2.default)(destinationAttribute.value.expression, (0, _babelTypes.stringLiteral)(resolvedStyleName));
    } else {
      throw new Error('Unexpected attribute value:' + destinationAttribute.value);
    }

    path.node.openingElement.attributes.splice(path.node.openingElement.attributes.indexOf(sourceAttribute), 1);
  } else {
    sourceAttribute.name.name = destinationName;
    sourceAttribute.value.value = resolvedStyleName;
  }
};
//# sourceMappingURL=resolveStringLiteral.js.map