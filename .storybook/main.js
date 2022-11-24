const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|mdx)'
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
  ],
  core: {
    builder: "@storybook/builder-vite"
  },
  staticDirs: ['../src/public'],
  async viteFinal (config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        // Set-up path aliases
        alias: {
          '@': path.dirname(path.resolve(__dirname))
        }
      },
    });
  },
}
