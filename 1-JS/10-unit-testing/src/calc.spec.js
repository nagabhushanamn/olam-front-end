



// Test-suite  ==> test-case(s)

describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
    it("contains spec with an expectation", function () {
        expect(false).toBe(false);
    });

});

describe("A calc suite", function () {
    xit("1+2=3", function () {
        let actual = calc.add(1, 2);
        expect(actual).toBe(3);
    });
    it("1-2=-1", function () {
        let actual = calc.sub(1, 2);
        expect(actual).toBe(-1);
    });

});