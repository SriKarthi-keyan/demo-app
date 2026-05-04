module.exports = {
  preset: '@react-native/jest-preset',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)/|react-redux|@react-native-picker|@react-native-async-storage)',
  ],
};
