(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{443:function(t,e,a){"use strict";a.r(e);var r=a(1),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"front-matter-in-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter-in-vuepress"}},[t._v("#")]),t._v(" Front Matter in VuePress")]),t._v(" "),a("p",[t._v("Any markdown file that contains a YAML front matter block will be processed by "),a("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("gray-matter"),a("OutboundLink")],1),t._v(". The front matter must be the first thing in the markdown file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\ntitle: Blogging Like a Hacker\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("lang: en-US\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[t._v("Between these triple-dashed lines, you can set predefined variables (see "),a("a",{attrs:{href:"#predefined-variables"}},[t._v("below")]),t._v(" for a reference), or even create custom ones of your own. These variables will then be available to you to access using "),a("code",[a("RouterLink",{attrs:{to:"/_posts/global-computed.html#frontmatter"}},[t._v("$frontmatter")])],1),t._v(" at the rest of the page, plus all custom and theming components.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Front matter variables are "),a("strong",[t._v("optional")]),t._v(" in VuePress.")])]),t._v(" "),a("h2",{attrs:{id:"alternative-front-matter-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-front-matter-formats"}},[t._v("#")]),t._v(" Alternative Front Matter Formats")]),t._v(" "),a("p",[t._v("In addition, VuePress also supports JSON or "),a("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOML"),a("OutboundLink")],1),t._v(" front matter.")]),t._v(" "),a("p",[t._v("JSON front matter needs to start and end in curly braces:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),a("p",[t._v("TOML front matter needs to be explicitly marked as TOML:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),a("h2",{attrs:{id:"predefined-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables"}},[t._v("#")]),t._v(" Predefined Variables")]),t._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("h1_title || siteConfig.title")])])]),t._v(" "),a("p",[t._v("Title of current page.")]),t._v(" "),a("h3",{attrs:{id:"lang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[t._v("#")]),t._v(" lang")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("en-US")])])]),t._v(" "),a("p",[t._v("Language of current page.")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("siteConfig.description")])])]),t._v(" "),a("p",[t._v("Description of current page.")]),t._v(" "),a("h3",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" layout")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("Layout")])])]),t._v(" "),a("p",[t._v("Set the layout component of the current page.")]),t._v(" "),a("h3",{attrs:{id:"permalink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[t._v("#")]),t._v(" permalink")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("siteConfig.permalink")])])]),t._v(" "),a("p",[t._v("Refer to: "),a("RouterLink",{attrs:{to:"/_posts/permalinks.html"}},[t._v("Permalinks")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"metatitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metatitle"}},[t._v("#")]),t._v(" metaTitle")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("`${page.title} | ${siteConfig.title}`")])])]),t._v(" "),a("p",[t._v("Override the default meta title.")]),t._v(" "),a("h3",{attrs:{id:"meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("Specify extra meta tags to be injected:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("h2",{attrs:{id:"predefined-variables-powered-by-default-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables-powered-by-default-theme"}},[t._v("#")]),t._v(" Predefined Variables Powered By Default Theme")]),t._v(" "),a("h3",{attrs:{id:"navbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navbar"}},[t._v("#")]),t._v(" navbar")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#disable-the-navbar"}},[t._v("Default Theme Config > Disable the Navbar")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" sidebar")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean|'auto'")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#sidebar"}},[t._v("Default Theme Config > Sidebar")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);