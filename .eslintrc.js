module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": 'babel-eslint',
    "plugins": ['decorator-position'],
    "extends": [
        'plugin:decorator-position/ember' // or other configuration
  ],
    "rules": {
    }
};
