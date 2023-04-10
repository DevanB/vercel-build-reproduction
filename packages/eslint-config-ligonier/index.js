const vars = ["const", "let", "var"]

module.exports = {
  plugins: ["turbo", "jsx-a11y", "prettier"],
  extends: [
    "eslint:recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  ignorePatterns: ["node_modules", "api", ".turbo", ".cache", "public/build"],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      typescript: {},
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: vars,
        next: "*",
      },
      {
        blankLine: "any",
        prev: vars,
        next: vars,
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "block-like",
      },
      {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-irregular-whitespace": "off",
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        endOfLine: "lf",
        semi: false,
        trailingComma: "all",
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
  overrides: [
    {
      files: ["*.js", "*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
}
