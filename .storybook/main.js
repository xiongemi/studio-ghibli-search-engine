module.exports = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  addons: ["@storybook/addon-mdx-gfm"],
  docs: {
    autodocs: true
  }
} // uncomment the property below if you want to apply some webpack config globally
// webpackFinal: async (config, { configType }) => {
//   // Make whatever fine-grained changes you need that should apply to all storybook configs
//   // Return the altered config
//   return config;
// },
;