exports.config = {
    files: {
        javascripts: {
            joinTo: 'app.js'
        }
    },

    plugins: {
        babel: {
            plugins: ['syntax-jsx', 'transform-react-jsx']
        }
    },

    npm: {
        enabled: true,
        whitelist: ['react', 'react-dom']
    }
};
