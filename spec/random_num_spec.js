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
    it("Given a random number when every number probability added results 10", function (){
        var all_num=collect_random_num(1000);
        var per_chance=count_chance(all_num);
        var rightProb=count_prob(per_chance,1000);
        expect(rightProb).toBe(10);
    });
    it("Given a random number when every number compared to each other results false", function () {
        var random_number = createRandomNum();
        var Tag=false;
        for(var i=0;i<4;i++){
            for(var j=i+1;j<4;j++){
                if(random_number[i]===random_number[j])
                    true;
            }
        }
        expect(Tag).toBe(false);
    });
    it("Given a random number when every number within 0-9 results false", function () {
        var is_NAN=false;
        var random_number = createRandomNum();
        for(var i=0;i<random_number.length;i++){
            if(random_number[i]>=0&&random_number[i]<=9){
                is_NAN=false
            }
            else is_NAN=true;
        }
        expect(is_NAN).toBe(false);
    });
});


