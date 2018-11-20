'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelTypes = require('babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

var _conditionalClassMerge = require('./conditionalClassMerge');

var _conditionalClassMerge2 = _interopRequireDefault(_conditionalClassMerge);

var _createObjectExpression = require('./createObjectExpression');

var _createObjectExpression2 = _interopRequireDefault(_createObjectExpression);

var _optionsDefaults = require('./schemas/optionsDefaults');

var _optionsDefaults2 = _interopRequireDefault(_optionsDefaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (t, path, sourceAttribute, destinationName, importedHelperIndentifier, styleModuleImportMapIdentifier, options) => {
  const expressionContainerValue = sourceAttribute.value;
  const destinationAttribute = path.node.openingElement.attributes.find(attribute => {
    return typeof attribute.name !== 'undefined' && attribute.name.name === destinationName;
  });

  if (destinationAttribute) {
    path.node.openingElement.attributes.splice(path.node.openingElement.attributes.indexOf(destinationAttribute), 1);
  }

  path.node.openingElement.attributes.splice(path.node.openingElement.attributes.indexOf(sourceAttribute), 1);

  const args = [expressionContainerValue.expression, styleModuleImportMapIdentifier];

  // Only provide options argument if the options are something other than default
  // This helps save a few bits in the generated user code
  if (options.handleMissingStyleName !== _optionsDefaults2.default.handleMissingStyleName) {
    args.push((0, _createObjectExpression2.default)(t, options));
  }

  const styleNameExpression = t.callExpression(t.clone(importedHelperIndentifier), args);

  if (destinationAttribute) {
    if ((0, _babelTypes.isStringLiteral)(destinationAttribute.value)) {
      path.node.openingElement.attributes.push((0, _babelTypes.jSXAttribute)((0, _babelTypes.jSXIdentifier)(destinationName), (0, _babelTypes.jSXExpressionContainer)((0, _babelTypes.binaryExpression)('+', t.stringLiteral(destinationAttribute.value.value + ' '), styleNameExpression))));
    } else if ((0, _babelTypes.isJSXExpressionContainer)(destinationAttribute.value)) {
      path.node.openingElement.attributes.push((0, _babelTypes.jSXAttribute)((0, _babelTypes.jSXIdentifier)(destinationName), (0, _babelTypes.jSXExpressionContainer)((0, _conditionalClassMerge2.default)(destinationAttribute.value.expression, styleNameExpression))));
    } else {
      throw new Error('Unexpected attribute value: ' + destinationAttribute.value);
    }
  } else {
    path.node.openingElement.attributes.push((0, _babelTypes.jSXAttribute)((0, _babelTypes.jSXIdentifier)(destinationName), (0, _babelTypes.jSXExpressionContainer)(styleNameExpression)));
  }
};
//# sourceMappingURL=replaceJsxExpressionContainer.js.map