function createRandomNum() {
    var randomNum = new Array()
    var tmp = -1;
    var repeat = false;
    for(var i = 0; i < 4; i++) {
        repeat = 0;
        tmp = parseInt(Math.random() * 10);
        for(var j = 0; j < i; j++) {
            if (tmp == randomNum[j]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            randomNum[i] = tmp;
        }
        else {
            i = i - 1;//若重复，循环变量i-1
        }
    }
    return  randomNum;
}