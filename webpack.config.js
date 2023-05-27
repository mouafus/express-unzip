module.export = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: [path.resolve(__dirname, 'node_modules')]
            }
        ]
    },
}