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

function collect_random_num(length){
    var tmpNum;
    var all_numbers = new Array();
    for ( var i = 0; i < length; i+=4) {
        tmpNum = createRandomNum();
        all_numbers[i]=tmpNum[0];
        all_numbers[i+1]=tmpNum[1];
        all_numbers[i+2]=tmpNum[2];
        all_numbers[i+3]=tmpNum[3];
    }
    return all_numbers;
}

function count_chance(all_numbers){
    var j=0;
    var per_chance = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    for (i = 0; i < all_numbers.length; i++)
    {
        per_chance[all_numbers[i]]++;
    }
    return per_chance;
}

function count_prob(number_chances,number_length){
   var rightProb=0;
   for(i=0;i<10;i++){
        var per=number_chances[i]/number_length;
        if(per>=0.07&&per<=0.13){
            rightProb++;
        }
    }
    return rightProb;
}
