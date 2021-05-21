/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router.js";

describe('pushToHistory', () => {
    //const history = pushToHistory('settings','');    
    test('settings is pushed',() =>{
        expect(pushToHistory('settings',1)).toMatchObject({});
    });
    test('entry is pushed',() =>{
        expect(pushToHistory('entry',1)).toMatchObject({});
    });
    test('default is pushed',() =>{
        expect(pushToHistory('notastate',1)).toMatchObject({});
    });
});