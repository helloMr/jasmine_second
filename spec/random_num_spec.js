describe("Given a random function when it working results random numbers ",function(){
    it("Given a random number when isn't null results 4", function (){
        var nums = createRandomNum();
        var N = 0;
        for (i = 0; i < 4; i++) {
            if (nums[i] !== "") {
                N++;
            }
        }
        expect(N).toBe(4);
    });
});


