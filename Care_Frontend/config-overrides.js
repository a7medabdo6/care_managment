const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins(
    "@babel/plugin-proposal-optional-chaining"
    /* Add plug-in names here (separate each value by a comma) */
  )
);