import { expect } from "chai";

import { index, HELLO_STRING } from "../";

const MOCK_EVENT = {};

const MOCK_CONTEXT = {};

describe("EXAMPLE helloWorld", () => {
    it("returns expected hello string.", () => {
        const expectedResult = HELLO_STRING;

        index(MOCK_EVENT, MOCK_CONTEXT, (error: string, data: string) => {
            expect(data).to.equal(expectedResult);
        });
    });
});