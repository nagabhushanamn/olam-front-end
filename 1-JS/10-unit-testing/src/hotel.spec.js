


describe("A hotel suite", function () {
    it("should return biryani", function (done) {
        let promise = hotel.getFood();
        promise.then((response) => {
            expect(response).toBe('biryani')
            done();
        }, (error) => {
            expect(error).toBe('biryani')
            done('hotel didnt return biryani')
        });
    });


});