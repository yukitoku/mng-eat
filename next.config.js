const { resolve } = require('path')

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  }
}

const withCSS = require('@zeit/next-css')

module.exports = withCSS({ 

});

module.exports = nextConfig
