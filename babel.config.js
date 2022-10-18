module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset',
      "@vue/babel-preset-jsx",
      ["@babel/preset-env", { "modules": false }]
    ],
    // plugins: [
    //   [
    //     "component",
    //     {
    //       "libraryName": "element-ui",
    //       "styleLibraryName": "theme-chalk"
    //     }
    //   ]
    // ]
  }

  // 单独引入js和css - 防止冲突
  