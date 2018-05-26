"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const vamtiger_regex_html_stylesheet_link_1 = require("vamtiger-regex-html-stylesheet-link");
exports.default = (params) => {
    const html = params.html;
    const stylesheetLinks = new Set();
    XRegExp.forEach(html, vamtiger_regex_html_stylesheet_link_1.default, (match) => {
        if (match.styleSheetLink)
            stylesheetLinks.add(match.styleSheetLink);
    });
    return Array.from(stylesheetLinks);
};
//# sourceMappingURL=index.js.map