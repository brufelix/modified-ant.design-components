const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { 
                '@primary-color': '#52DF9A',
                '@link-color': '#52DF9A',
                '@link-hover-color': '#00B894',
                '@border-radius-base': '2px',
                '@menu-bg':'#52DF9A',
                '@item-active-bg': '#f5f5f5',
                '@item-hover-bg': '#f5f5f5',
                '@btn-primary-bg': '#52DF9A',
                '@slider-track-background-color': '#00B894',
                '@layout-header-background': '#00B894'
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };