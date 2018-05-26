import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import getStylesheetLinks from '../..';
import html from './mock-data';

describe("vamtiger-get-stylesheet-links: should get", function () {
    it("unique stylesheet links", async function () {
        const expected = [
            '<link href="some/stylesheet/link/index.css" rel="stylesheet">',
            '<link href="some/other/stylesheet/link/index.css" rel="stylesheet">'
        ];
        const styleSheetLinks = getStylesheetLinks({ html });

        expect(styleSheetLinks).to.be.ok;
        expect(styleSheetLinks.length).to.equal(2);
        expect(styleSheetLinks.every(currentStyleSheetLinks => expected.some(expectedStylesheetLink => currentStyleSheetLinks === expectedStylesheetLink))).to.be.true;
    })
})