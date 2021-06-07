module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@assets': 'moneytransfer/src/assets/',
          '@components': 'moneytransfer/src/components/',
          '@constants': 'moneytransfer/src/constants/',
          '@navigation': 'moneytransfer/src/navigation/',
          '@pages': 'moneytransfer/src/pages/',
          '@utils': 'moneytransfer/src/utils/',
        },
      },
    ],
  ],
};
