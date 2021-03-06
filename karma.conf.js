/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with '.test.js' in the src/*/ folders,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'src/*/*.test.js', type: 'module' },
        { pattern: 'dist/bundle.css', included: true },
      ],

      esm: { nodeResolve: true, },
      // you can overwrite/extend the config further
    }),
  );
  return config;
};