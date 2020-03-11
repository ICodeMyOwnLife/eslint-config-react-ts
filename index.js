module.exports = {
  extends: ["generic-ts", "plugin:react/recommended"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/display-name": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ],
    "react/jsx-wrap-multilines": ["error", { prop: "ignore" }]
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
