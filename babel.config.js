module.exports = function (api) {
    api.cache(true);
    const plugins = [
        '@babel/plugin-proposal-export-namespace-from',
        'react-native-reanimated/plugin',
        [
            'babel-plugin-root-import',
            {
                rootPathSuffix: 'src',
            },
        ],
        [
            'module-resolver',
            {
                root: ['./'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    /**
                     * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
                     */
                    '^~(.+)': './src/\\1',
                },
            },
        ],
    ];
    return {
        env: {
            production: {
                plugins: ['transform-remove-console'],
            },
        },
        plugins,
        presets: ['module:metro-react-native-babel-preset'],
    };
};
