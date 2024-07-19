module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },

  publicRuntimeConfig: {
    PRODUCTION: false,
    WITHOUT_DOCKER: 0
  },

  env: {
    APP_DOMAIN: 'localhost',
    STRIPE_PUBLISHABLE_API_KEY_DEVELOPMENT: 'STRIPE_PUBLISHABLE_API_KEY_DEVELOPMENT',
    STRIPE_PUBLISHABLE_API_KEY_PRODUCTION: 'STRIPE_PUBLISHABLE_API_KEY_PRODUCTION',
    GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT: 'GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT',
    GOOGLE_AUTH_CLIENT_ID_PRODUCTION: 'GOOGLE_AUTH_CLIENT_ID_PRODUCTION',
    MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT: 'MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT',
    MICROSOFT_AUTH_CLIENT_ID_PRODUCTION: 'MICROSOFT_AUTH_CLIENT_ID_PRODUCTION',
    FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT: 'FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT',
    FACEBOOK_AUTH_CLIENT_ID_PRODUCTION: 'FACEBOOK_AUTH_CLIENT_ID_PRODUCTION',
    GOOGLE_ANALYTICS_ID_DEVELOPMENT: 'GOOGLE_ANALYTICS_ID_DEVELOPMENT',
    GOOGLE_ANALYTICS_ID_PRODUCTION: 'GOOGLE_ANALYTICS_ID_PRODUCTION',
    USE_GOOGLE_ANALYTICS_IN_DEVELOPMENT: false,
    USE_GOOGLE_ANALYTICS_IN_PRODUCTION: false,
    TINY_CME_API_KEY_DEVELOPMENT: 'TINY_CME_API_KEY_DEVELOPMENT',
    TINY_CME_API_KEY_PRODUCTION: 'TINY_CME_API_KEY_PRODUCTION',
    IP_INFO_TOKEN_DEVELOPMENT: 'IP_INFO_TOKEN_DEVELOPMENT',
    IP_INFO_TOKEN_PRODUCTION: 'IP_INFO_TOKEN_PRODUCTION',
    USE_GET_IP_INFO_TOKEN_DEVELOPMENT: false,
    USE_GET_IP_INFO_TOKEN_PRODUCTION: false,
    USE_HOTJAR_DEVELOPMENT: false,
    USE_HOTJAR_PRODUCTION: false,
    HOTJAR_ID_DEVELOPMENT: 'HOTJAR_ID_DEVELOPMENT',
    HOTJAR_ID_PRODUCTION: 'HOTJAR_ID_PRODUCTION',
    IS_STAGING_ENV: 0
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },

  images: {
    domains: ['localhost', 'makeclient.ngrok.io', 'picsum.photos', 'img.icons8.com']
  }
};