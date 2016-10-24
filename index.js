module.exports = {
    "defaultSeverity": "warning",
    "rules": {
        "color-hex-case": "upper",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-hex": null,

        "font-family-name-quotes": null,
        "font-weight-notation": "named-where-possible",

        "function-comma-newline-after": "never-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "never-multi-line",
        "function-parentheses-space-inside": null,
        "function-url-quotes": "always",
        "function-whitespace-after": "always",

        "number-leading-zero": "always",
        "number-max-precision": 6,

        "string-quotes": "single",

        "length-zero-no-unit": true,

        "unit-case": "lower",

        "value-keyword-case": null,
        "value-no-vendor-prefix": true,
        "value-list-comma-newline-after": "never-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": null,
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,

        "property-case": "lower",

        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-block-properties-order": [
            {
                "order": "strict",
                "properties": [
                    "position",
                    "top",
                    "right",
                    "bottom",
                    "left",
                    "z-index"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "float",
                    "clear"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "flex",
                    "flex-basis",
                    "flex-direction",
                    "flex-flow",
                    "flex-grow",
                    "flex-shrink",
                    "flex-wrap",
                    "align-content",
                    "align-items",
                    "align-self",
                    "justify-content",
                    "order"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "box-sizing",
                    "display",
                    "overflow",
                    "overflow-x",
                    "overflow-y"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "width",
                    "min-width",
                    "max-width",
                    "height",
                    "min-height",
                    "max-height"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "margin",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left"
                ]
            },
            {
                "order": "flexible",
                "properties": [
                    "columns",
                    "column-gap",
                    "column-fill",
                    "column-rule",
                    "column-span",
                    "column-count",
                    "column-width"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "color",
                    "font",
                    "font-family",
                    "font-size",
                    "font-smoothing",
                    "font-style",
                    "font-variant",
                    "font-weight",
                    "font-feature-settings",
                    "letter-spacing",
                    "line-height",
                    "list-style",
                    "text-align",
                    "text-decoration",
                    "text-indent",
                    "text-overflow",
                    "text-rendering",
                    "text-shadow",
                    "text-transform",
                    "text-wrap",
                    "white-space",
                    "word-spacing",
                    "word-wrap"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "background",
                    "background-clip",
                    "background-color",
                    "background-image",
                    "background-position",
                    "background-size",
                    "background-repeat",
                    "border",
                    "border-top",
                    "border-right",
                    "border-bottom",
                    "border-left",
                    "border-width",
                    "border-top-width",
                    "border-right-width",
                    "border-bottom-width",
                    "border-left-width",
                    "border-style",
                    "border-top-style",
                    "border-right-style",
                    "border-bottom-style",
                    "border-left-style",
                    "border-radius",
                    "border-top-left-radius",
                    "border-top-right-radius",
                    "border-bottom-left-radius",
                    "border-bottom-right-radius",
                    "border-color",
                    "border-top-color",
                    "border-right-color",
                    "border-bottom-color",
                    "border-left-color",
                    "outline",
                    "outline-color",
                    "outline-offset",
                    "outline-style",
                    "outline-width",
                    "border-collapse",
                    "border-spacing",
                    "box-shadow"
                ]
            },
            {
                "order": "flexible",
                "properties": [
                    "caption-side",
                    "content",
                    "cursor",
                    "empty-cells",
                    "opacity",
                    "quotes",
                    "speak",
                    "table-layout",
                    "vertical-align",
                    "visibility"
                ]
            },
            {
                "order": "strict",
                "properties": [
                    "transform",
                    "transition"
                ]
            }
        ],
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": null,
        "declaration-block-trailing-semicolon": "always",

        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-after": null,
        "block-closing-brace-space-before": "always-single-line",
        "block-no-single-line": null,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-newline-before": null,
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",

        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes": "always",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-max-compound-selectors": 3,
        "selector-max-specificity": "0,3,1",
        "selector-no-attribute": null,
        "selector-no-combinator": null,
        "selector-no-id": true,
        "selector-no-qualifying-type": [true, { "ignore": ["attribute", "class"] }],
        "selector-no-type": null,
        "selector-no-universal": null,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-root-no-composition": true,
        "selector-type-case":"lower",
        "selector-type-no-unknown":true,
        "selector-max-empty-lines": 0,

        "selector-list-comma-newline-after": "always-multi-line",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",

        "root-no-standard-properties":true,

        "rule-nested-empty-line-before": null,
        "rule-non-nested-empty-line-before": ["always", { "except":["after-single-line-comment"] }],

        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-no-missing-punctuation": true,
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",

        "media-query-list-comma-newline-after": "never-multi-line",
        "media-query-list-comma-newline-before": "never-multi-line",
        "media-query-list-comma-space-after": "always",
        "media-query-list-comma-space-before": "never",

        "at-rule-empty-line-before": ["always", { "except": ["first-nested"] }],
        "at-rule-name-case":"lower",
        "at-rule-name-newline-after": null,
        "at-rule-name-space-after": "always",
        "at-rule-no-unknown": null,
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",

        "stylelint-disable-reason": null,

        "comment-empty-line-before": null,
        "comment-no-empty": true,
        "comment-whitespace-inside": null,

        "indentation": "tab",
        "max-empty-lines": 2,
		"max-line-length": [80, { "ignore": ["comments"] }],
        "max-nesting-depth": 4,
        "no-browser-hacks": null,
        "no-descending-specificity": null,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-indistinguishable-colors": null,
        "no-invalid-double-slash-comments": null,
        "no-missing-end-of-source-newline":true,
        "no-unknown-animations": true,
        "no-unsupported-browser-features": null
    }
}
