/**
 * @jest-environment jsdom
 */

import { json2html } from '../src/ts/lib/json2html';

let json = '{"foo": 42}';
let formatted = json2html({
    json: json,
});

describe('', () => {
    test('', () => {
        
    });
});