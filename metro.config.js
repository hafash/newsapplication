const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);

  return {
    resolver: {
      sourceExts: [...sourceExts, 'ts', 'tsx'],
      assetExts: [...assetExts, 'png', 'jpg', 'jpeg', 'svg'],
    },
  };
})();
