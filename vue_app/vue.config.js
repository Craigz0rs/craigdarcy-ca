module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixins.scss";
            `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
};
