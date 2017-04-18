module.exports = {
	"defaultSeverity": "warning",
	"plugins": [
		'stylelint-order',
	],
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

		"order/order": [
			{
				"type": "at-rule",
				"name": "extend"
			},
			{
				"type": "at-rule",
				"name": "include",
				"parameter": /^(?!respond-to\(.*\)$)/
			},
			{
				"type": "at-rule",
				"name": "media"
			},
			"declarations",
			"rules"
		],
		"order/properties-order": [
			[{
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
				"properties": [
					"display",
					"flex",
					"align",
					"justify-content",
					"order"
				]
			},
			{
				"properties": [
					"perspective",
					"transform",
					"float",
					"clear"
				]
			},
			{
				"properties": [
					"box-sizing",
					"overflow",
					"width",
					"min-width",
					"max-width",
					"height",
					"min-height",
					"max-height",
					"margin",
					"padding"
				]
			},
			{
				"properties": [
					"color",
					"font",
					"letter-spacing",
					"line-height",
					"list-style",
					"text",
					"white-space",
					"word"
				]
			},
			{
				"properties": [
					"background",
					"border",
					"outline",
					"box-shadow"
				]
			},
			{
				"properties": [
					"animation"
				]
			},
			{
				"properties": [
					"transition"
				]
			}],
			{
				"unspecified": "bottom"
			}
		],
		// Declaration block - http://stylelint.io/user-guide/rules/#declaration-block
		"declaration-block-no-duplicate-properties": [true, {
			ignore: ["consecutive-duplicates-with-different-values"],
		}],
		"declaration-block-no-redundant-longhand-properties": true,
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-semicolon-newline-after": "always-multi-line",
		"declaration-block-semicolon-newline-before": "never-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-single-line-max-declarations": 1,
		"declaration-block-trailing-semicolon": "always",

		"block-closing-brace-empty-line-before": "never",
		"block-closing-brace-newline-after": ["always", { "ignoreAtRules": ["if", "else"] }],
		"block-closing-brace-newline-before": "always-multi-line",
		"block-closing-brace-space-after": null,
		"block-closing-brace-space-before": "always-single-line",
		"block-no-single-line": null,
		"block-opening-brace-newline-after": "always-multi-line",
		"block-opening-brace-newline-before": null,
		"block-opening-brace-space-after": "always-single-line",
		"block-opening-brace-space-before": "always",

		"selector-attribute-brackets-space-inside": "never",
		"selector-attribute-operator-blacklist": null,
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
		"selector-attribute-operator-whitelist": null,
		"selector-attribute-quotes": "always",
		"selector-combinator-space-after": "always",
		"selector-combinator-space-before": "always",
		"selector-descendant-combinator-no-non-space": true,
		"selector-max-compound-selectors": 3,
		"selector-max-specificity": null,
		"selector-no-attribute": null,
		"selector-no-combinator": null,
		"selector-no-id": true,
		"selector-no-qualifying-type": [true, {
			"ignore": ["attribute", "class"]
		}],
		"selector-no-type": null,
		"selector-no-universal": null,
		"selector-no-vendor-prefix": true,
		"selector-pseudo-class-case": "lower",
		"selector-pseudo-class-no-unknown": true,
		"selector-pseudo-class-parentheses-space-inside": "never",
		"selector-pseudo-element-case": "lower",
		"selector-pseudo-element-colon-notation": "double",
		"selector-pseudo-element-no-unknown": true,
		"selector-type-case": "lower",
		"selector-type-no-unknown": true,
		"selector-max-empty-lines": 0,

		"selector-list-comma-newline-after": "always-multi-line",
		"selector-list-comma-newline-before": "never-multi-line",
		"selector-list-comma-space-after": "always-single-line",
		"selector-list-comma-space-before": "never",

		"rule-empty-line-before": ["always-multi-line", {
			"except": ["first-nested"],
			"ignore": ["after-comment"],
		}],

		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-name-case": "lower",
		"media-feature-name-no-unknown": true,
		"media-feature-name-no-vendor-prefix": true,
		"media-feature-range-operator-space-after": "always",
		"media-feature-range-operator-space-before": "always",

		"media-query-list-comma-newline-after": "always-multi-line",
		"media-query-list-comma-newline-before": "never-multi-line",
		"media-query-list-comma-space-after": "always-single-line",
		"media-query-list-comma-space-before": "never",

		"at-rule-empty-line-before": ["always", {
			"ignore": ["after-comment", "blockless-after-blockless", "inside-block"],
			"ignoreAtRules": ["else"],
		}],

		"at-rule-name-case": "lower",
		"at-rule-name-newline-after": null,
		"at-rule-name-space-after": "always-single-line",
		"at-rule-no-unknown": null,
		"at-rule-no-vendor-prefix": true,
		"at-rule-semicolon-newline-after": "always",

		"stylelint-disable-reason": null,

		"comment-empty-line-before": null,
		"comment-no-empty": true,
		"comment-whitespace-inside": null,

		"indentation": "tab",
		"max-empty-lines": 2,
		"max-line-length": [100, { "ignore": ["comments"] }],
		"max-nesting-depth": 5,
		"no-browser-hacks": null,
		"no-descending-specificity": null,
		"no-duplicate-selectors": true,
		"no-empty-source": true,
		"no-eol-whitespace": true,
		"no-extra-semicolons": true,
		"no-indistinguishable-colors": null,
		"no-invalid-double-slash-comments": true,
		"no-missing-end-of-source-newline": true,
		"no-unknown-animations": true,
		"no-unsupported-browser-features": null
	}
}
