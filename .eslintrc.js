const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended', // 规则参考文档：https://cn.eslint.org/docs/rules/
    'airbnb-base', // 规则参考文档：https://github.com/lin-123/javascript
    'plugin:vue/vue3-recommended', // 规则参考文档：https://eslint.vuejs.org/rules/
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-trailing-spaces': 'off',
    // 允许windows开发环境
    'linebreak-style': [0, 'error', 'windows'],
    // --------------------------------------------------------------------------------
    // js 代码样式规范规则
    // --------------------------------------------------------------------------------
    // 【关闭】禁用 console（使用 vite 打包时会配置去除 console.log 代码）
    'no-console': ['off', { allow: ['warn', 'error'] }],
    // 【警告】禁止重复导入模块
    'import/no-duplicates': ['warn'],
    // 【关闭】关闭偏好默认导出
    'import/prefer-default-export': 'off',
    // 【错误】禁止未使用的变量（尽可能防止代码中出现冗余代码）
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    // 【错误】无参数重新分配 https://eslint.org/docs/latest/rules/no-param-reassign#rule-details
    'no-param-reassign': ['error', { props: false }],
    // 【错误】没有未使用的表达式 https://eslint.org/docs/latest/rules/no-unused-expressions#rule-details
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    // 【错误】驼峰命名 https://eslint.org/docs/latest/rules/camelcase#rule-details
    camelcase: ['error', { allow: ['^CONFIG_'] }],
    // 【警告】最长 200 个字符
    'max-len': ['warn', {
      code: 200,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    // 【错误】默认缩进2空格
    indent: ['error', 2],
    // 【错误】优先使用单引号
    quotes: ['error', 'single'],
    // 【错误】强制结尾加分号
    semi: ['error', 'always'],
    // 【错误】强制逗号规则
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    // --------------------------------------------------------------------------------
    // vue template 样式规则 规则参考文档：https://eslint.vuejs.org/rules/
    // --------------------------------------------------------------------------------
    'vue/multi-word-component-names': ['off', {
      ignores: [''],
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 5,
      },
      multiline: {
        max: 3,
      },
    }],
    'vue/singleline-html-element-content-newline': ['warn', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea', 'p', 'span', 'button'],
    }],
    'no-use-before-define': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')],
        ],
      },
    },
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
