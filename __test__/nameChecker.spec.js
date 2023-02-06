import { checkURL } from "../src/client/js/nameChecker"

describe("Testing the submit functionality", () => {
    test("Testing the checkURL() function", () => {
        expect(checkURL).toBeDefined();
    })
    
});