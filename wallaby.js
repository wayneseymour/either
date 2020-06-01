module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js'
        ],
        tests: [
            '__test__/**/*.spec.js'
        ],
        trace: true,
        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },
        env: {
            type: 'node',
            runner: 'node'
        }
    };
};
