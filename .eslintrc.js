module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  globals: { defineEmits: true, defineProps: true, defineExpose: true },
  rules: {
    'no-console': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'no-var': 2,
    'prefer-template': 1,
    'no-unused-vars': 1,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 10
        },
        multiline: {
          max: 5,
          allowFirstLine: false
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 1,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'no-tabs': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      2,
      'never',
      {
        beforeStatementContinuationChars: 'never'
      }
    ],
    'no-delete-var': 2,
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ],
    'template-curly-spacing': 'off'
  }
}
