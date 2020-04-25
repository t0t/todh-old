module.exports = {
<<<<<<< HEAD
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
=======
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/todh/'
}
>>>>>>> master
