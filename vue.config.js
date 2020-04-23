module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/todh/",

  chainWebpack: config => {
    config.module
      .rule("storysource")
      .test(/\.stories\.js?$/)
      .post()
      .use("storysource")
      .loader(require.resolve("@storybook/addon-storysource/loader"));
  }
};
