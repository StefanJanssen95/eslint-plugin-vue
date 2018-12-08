(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{450:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("ul",[e._m(2),e._v(" "),s("li",[e._v("🔧 The "),s("code",[e._v("--fix")]),e._v(" option on the "),s("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),s("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-closing-bracket-spacing":["error"]}}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <div>\n  <div foo>\n  <div foo="bar">\n  </div>\n  <div />\n  <div foo />\n  <div foo="bar" />\n\n  \x3c!-- ✗ BAD --\x3e\n  <div >\n  <div foo >\n  <div foo="bar" >\n  </div >\n  <div/>\n  <div foo/>\n  <div foo="bar"/>\n</template>\n')])])])]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),s("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-closing-bracket-spacing":["error",{startTag:"always",endTag:"always",selfClosingTag:"always"}]}}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <div >\n  <div foo >\n  <div foo="bar" >\n  </div >\n  <div />\n  <div foo />\n  <div foo="bar" />\n</template>\n')])])])]),e._v(" "),e._m(9),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./no-multi-spaces.html"}},[e._v("vue/no-multi-spaces")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"./html-closing-bracket-newline.html"}},[e._v("vue/html-closing-bracket-newline")])],1)]),e._v(" "),e._m(10),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/html-closing-bracket-spacing.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/html-closing-bracket-spacing.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue-html-closing-bracket-spacing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-html-closing-bracket-spacing","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/html-closing-bracket-spacing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("require or disallow a space before tag's closing brackets")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("⚙️ This rule is included in "),t("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),t("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This rule aims to enforce consistent spacing style before closing brackets "),t("code",[this._v(">")]),this._v(" of tags.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vue/html-closing-bracket-spacing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"startTag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"always"')]),e._v(" | "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"never"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endTag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"always"')]),e._v(" | "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"never"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"selfClosingTag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"always"')]),e._v(" | "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"never"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("startTag")]),e._v(" ("),s("code",[e._v('"always" | "never"')]),e._v(") ... Setting for the "),s("code",[e._v(">")]),e._v(" of start tags (e.g. "),s("code",[e._v("<div>")]),e._v("). Default is "),s("code",[e._v('"never"')]),e._v(".\n"),s("ul",[s("li",[s("code",[e._v('"always"')]),e._v(" ... requires one or more spaces.")]),e._v(" "),s("li",[s("code",[e._v('"never"')]),e._v(" ... disallows spaces.")])])]),e._v(" "),s("li",[s("code",[e._v("endTag")]),e._v(" ("),s("code",[e._v('"always" | "never"')]),e._v(") ... Setting for the "),s("code",[e._v(">")]),e._v(" of end tags (e.g. "),s("code",[e._v("</div>")]),e._v("). Default is "),s("code",[e._v('"never"')]),e._v(".\n"),s("ul",[s("li",[s("code",[e._v('"always"')]),e._v(" ... requires one or more spaces.")]),e._v(" "),s("li",[s("code",[e._v('"never"')]),e._v(" ... disallows spaces.")])])]),e._v(" "),s("li",[s("code",[e._v("selfClosingTag")]),e._v(" ("),s("code",[e._v('"always" | "never"')]),e._v(") ... Setting for the "),s("code",[e._v("/>")]),e._v(" of self-closing tags (e.g. "),s("code",[e._v("<div/>")]),e._v("). Default is "),s("code",[e._v('"always"')]),e._v(".\n"),s("ul",[s("li",[s("code",[e._v('"always"')]),e._v(" ... requires one or more spaces.")]),e._v(" "),s("li",[s("code",[e._v('"never"')]),e._v(" ... disallows spaces.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"starttag-always-endtag-always-selfclosingtag-always"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starttag-always-endtag-always-selfclosingtag-always","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v('"startTag": "always", "endTag": "always", "selfClosingTag": "always"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" 👫 Related rules")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);n.options.__file="html-closing-bracket-spacing.md";t.default=n.exports}}]);