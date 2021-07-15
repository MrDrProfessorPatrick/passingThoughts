const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        
    },
    devServer:{
        port:4200
      },

    module:{
        rules: [
            {
                test:/\.(js|jsx)$/,
                
                use: {
                    loader:'babel-loader',
                    
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                }
                    
                }
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
    }
]
}
}