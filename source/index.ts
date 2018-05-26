import * as XRegExp from 'xregexp';
import {default as regex, Match} from 'vamtiger-regex-html-stylesheet-link';

export default (params: Params) => {
    const html = params.html;
    const stylesheetLinks = new Set() as Set<string>;

    XRegExp.forEach(html, regex, (match: Match) => {
        if (match.styleSheetLink)
            stylesheetLinks.add(match.styleSheetLink);
    });

    return Array.from(stylesheetLinks);
}

export interface Params {
    html: string;
}