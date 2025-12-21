/** @type {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'color-hex-length': null,
        'declaration-empty-line-before': null,
        'custom-property-empty-line-before': null,
        'scss/double-slash-comment-empty-line-before': null,
        'selector-class-pattern': null,
        'no-empty-source': null,
        'value-keyword-case': null,
        'rule-empty-line-before': null,
    },
};

export default config;
