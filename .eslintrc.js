module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};

// .eslintrc.js
// 参考文档：https://blog.csdn.net/qq_41887214/article/details/132391992

// 下面这段代码表示用eslint报prettier的错误
// {
//   "plugins": ["prettier"],
//   "rules": {
//     "prettier/prettier": "error"
//   }
// }
