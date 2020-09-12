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
                '@border-radius-base': '2px',
                '@input-icon-color':'#52DF9A',
                '@menu-bg':'#f2f2f2',
                '@menu-item-active-bg': '#233DA6',
                '@menu-item-color': "#52DF9A",
                '@menu-item-hover-bg': '#B3B3B3',
                '@btn-primary-bg': '#52DF9A',
                '@slider-track-background-color': '#f2f2f2',
                '@layout-header-background': '#f2f2f2',
                '@link-hover-color': '#00B894',
                '@input-icon-hover-color': '#00B894',
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };