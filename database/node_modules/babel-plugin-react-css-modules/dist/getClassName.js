'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


const DEFAULT_HANDLE_MISSING_STYLENAME_OPTION = 'throw';

const isNamespacedStyleName = styleName => {
  return styleName.indexOf('.') !== -1;
};

const getClassNameForNamespacedStyleName = (styleName, styleModuleImportMap, handleMissingStyleNameOption) => {
  // Note:
  // Do not use the desctructing syntax with Babel.
  // Desctructing adds _slicedToArray helper.
  const styleNameParts = styleName.split('.');
  const importName = styleNameParts[0];
  const moduleName = styleNameParts[1];
  const handleMissingStyleName = handleMissingStyleNameOption || DEFAULT_HANDLE_MISSING_STYLENAME_OPTION;

  if (!moduleName) {
    if (handleMissingStyleName === 'throw') {
      throw new Error('Invalid style name: ' + styleName);
    } else if (handleMissingStyleName === 'warn') {
      // eslint-disable-next-line no-console
      console.warn('Invalid style name: ' + styleName);
    } else {
      return null;
    }
  }

  if (!styleModuleImportMap[importName]) {
    if (handleMissingStyleName === 'throw') {
      throw new Error('CSS module import does not exist: ' + importName);
    } else if (handleMissingStyleName === 'warn') {
      // eslint-disable-next-line no-console
      console.warn('CSS module import does not exist: ' + importName);
    } else {
      return null;
    }
  }

  if (!styleModuleImportMap[importName][moduleName]) {
    if (handleMissingStyleName === 'throw') {
      throw new Error('CSS module does not exist: ' + moduleName);
    } else if (handleMissingStyleName === 'warn') {
      // eslint-disable-next-line no-console
      console.warn('CSS module does not exist: ' + moduleName);
    } else {
      return null;
    }
  }

  return styleModuleImportMap[importName][moduleName];
};

exports.default = (styleNameValue, styleModuleImportMap, options) => {
  const styleModuleImportMapKeys = Object.keys(styleModuleImportMap);

  const handleMissingStyleName = options && options.handleMissingStyleName || DEFAULT_HANDLE_MISSING_STYLENAME_OPTION;

  return styleNameValue.split(' ').filter(styleName => {
    return styleName;
  }).map(styleName => {
    if (isNamespacedStyleName(styleName)) {
      return getClassNameForNamespacedStyleName(styleName, styleModuleImportMap, handleMissingStyleName);
    }

    if (styleModuleImportMapKeys.length === 0) {
      throw new Error('Cannot use styleName attribute for style name \'' + styleName + '\' without importing at least one stylesheet.');
    }

    if (styleModuleImportMapKeys.length > 1) {
      throw new Error('Cannot use anonymous style name \'' + styleName + '\' with more than one stylesheet import.');
    }

    const styleModuleMap = styleModuleImportMap[styleModuleImportMapKeys[0]];

    if (!styleModuleMap[styleName]) {
      if (handleMissingStyleName === 'throw') {
        throw new Error('Could not resolve the styleName \'' + styleName + '\'.');
      }
      if (handleMissingStyleName === 'warn') {
        // eslint-disable-next-line no-console
        console.warn('Could not resolve the styleName \'' + styleName + '\'.');
      }
    }

    return styleModuleMap[styleName];
  }).filter(className => {
    // Remove any styles which could not be found (if handleMissingStyleName === 'ignore')
    return className;
  }).join(' ');
};
//# sourceMappingURL=getClassName.js.map