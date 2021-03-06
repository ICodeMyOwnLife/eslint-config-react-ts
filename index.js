module.exports = {
  extends: ["airbnb", "plugin:react/recommended", "generic-ts"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/display-name": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": ["error", { prop: "ignore" }],
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: [
    "**/*.test.tsx",
    "**/*.min.jsx",
    "src/react-app-env.d.ts",
    "src/serviceWorker.ts"
  ]
};
