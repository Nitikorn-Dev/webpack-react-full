
const plugins = ['react-refresh/babel'];

module.exports = (api) => {
    console.log(api.env())
    // This caches the Babel config
    api.cache.using(() => process.env.NODE_ENV);
    console.log('babel',api.env("development"))
    return {
      presets: [
        '@babel/preset-env',
        // Enable development transform of React with new automatic runtime
        ['@babel/preset-react', { development: !api.env('production'), runtime: 'automatic' }],
      ],
      // Applies the react-refresh Babel plugin on non-production modes only
      ...(!api.env('production') && { plugins: plugins }),
    };
  };