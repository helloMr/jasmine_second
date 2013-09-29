
describe("compare random_number with user_number result mAnB",function(){
    it("Given random_number=1234,user_number=5678 when compared result 0A0B",function(){
        expect(compareNum("1234","5678")).toBe(0+"A"+0+"B");
    });
    it("Given random_number=1234,user_number=1234 when compared result 4A0B",function(){
        expect(compareNum("1234","1234")).toBe(4+"A"+0+"B");
    });
    it("Given random_number=1234,user_number=1243 when compared result 2A2B",function(){
        expect(compareNum("1234","1243")).toBe(2+"A"+2+"B");
    });
    it("Given random_number=1234,user_number=1234 when compared result 0A4B",function(){
        expect(compareNum("1234","4321")).toBe(0+"A"+4+"B");
    });
})