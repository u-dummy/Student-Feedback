'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _path = require('path');

var _fs = require('fs');

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _genericNames = require('generic-names');

var _genericNames2 = _interopRequireDefault(_genericNames);

var _postcssModulesExtractImports = require('postcss-modules-extract-imports');

var _postcssModulesExtractImports2 = _interopRequireDefault(_postcssModulesExtractImports);

var _postcssModulesLocalByDefault = require('postcss-modules-local-by-default');

var _postcssModulesLocalByDefault2 = _interopRequireDefault(_postcssModulesLocalByDefault);

var _postcssModulesParser = require('postcss-modules-parser');

var _postcssModulesParser2 = _interopRequireDefault(_postcssModulesParser);

var _postcssModulesScope = require('postcss-modules-scope');

var _postcssModulesScope2 = _interopRequireDefault(_postcssModulesScope);

var _postcssModulesValues = require('postcss-modules-values');

var _postcssModulesValues2 = _interopRequireDefault(_postcssModulesValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getFiletypeOptions = (cssSourceFilePath, filetypes) => {
  const extension = cssSourceFilePath.substr(cssSourceFilePath.lastIndexOf('.'));
  const filetype = filetypes ? filetypes[extension] : null;

  return filetype;
};

// eslint-disable-next-line flowtype/no-weak-types
const getSyntax = filetypeOptions => {
  if (!filetypeOptions || !filetypeOptions.syntax) {
    return null;
  }

  // eslint-disable-next-line import/no-dynamic-require, global-require
  return require(filetypeOptions.syntax);
};

// eslint-disable-next-line flowtype/no-weak-types
const getExtraPlugins = filetypeOptions => {
  if (!filetypeOptions || !filetypeOptions.plugins) {
    return [];
  }

  return filetypeOptions.plugins.map(plugin => {
    if (Array.isArray(plugin)) {
      var _plugin = _slicedToArray(plugin, 2);

      const pluginName = _plugin[0],
            pluginOptions = _plugin[1];

      // eslint-disable-next-line import/no-dynamic-require, global-require

      return require(pluginName)(pluginOptions);
    }

    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(plugin);
  });
};

const getTokens = (runner, cssSourceFilePath, filetypeOptions) => {
  // eslint-disable-next-line flowtype/no-weak-types
  const options = {
    from: cssSourceFilePath
  };

  if (filetypeOptions) {
    options.syntax = getSyntax(filetypeOptions);
  }

  const lazyResult = runner.process((0, _fs.readFileSync)(cssSourceFilePath, 'utf-8'), options);

  lazyResult.warnings().forEach(message => {
    // eslint-disable-next-line no-console
    console.warn(message.text);
  });

  return lazyResult.root.tokens;
};

exports.default = (cssSourceFilePath, options) => {
  // eslint-disable-next-line prefer-const
  let runner;

  let generateScopedName;

  if (options.generateScopedName && typeof options.generateScopedName === 'function') {
    generateScopedName = options.generateScopedName;
  } else {
    generateScopedName = (0, _genericNames2.default)(options.generateScopedName || '[path]___[name]__[local]___[hash:base64:5]', {
      context: options.context || process.cwd()
    });
  }

  const filetypeOptions = getFiletypeOptions(cssSourceFilePath, options.filetypes);

  const fetch = (to, from) => {
    const fromDirectoryPath = (0, _path.dirname)(from);
    const toPath = (0, _path.resolve)(fromDirectoryPath, to);

    return getTokens(runner, toPath, filetypeOptions);
  };

  const extraPlugins = getExtraPlugins(filetypeOptions);

  const plugins = [...extraPlugins, _postcssModulesValues2.default, _postcssModulesLocalByDefault2.default, _postcssModulesExtractImports2.default, new _postcssModulesScope2.default({
    generateScopedName
  }), new _postcssModulesParser2.default({
    fetch
  })];

  runner = (0, _postcss2.default)(plugins);

  return getTokens(runner, cssSourceFilePath, filetypeOptions);
};
//# sourceMappingURL=requireCssModule.js.map