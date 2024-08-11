module.exports = {
    moduleDirectories: ['./node_modules', 'src'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    "automock": false,
};