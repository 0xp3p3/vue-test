module.exports = {
    preset: 'ts-jest',
    testEnvironment: '@bufbuild/jest-environment-jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
    transformIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/tests/**/*.spec.(ts|tsx|js)']
};
