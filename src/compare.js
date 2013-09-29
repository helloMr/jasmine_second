function compareNum(rnumber, unumber) {
    var a_counts = 0, b_counts = 0, bx_counts = 0;
    for (var i = 0; i < 4; i++) {
        if (rnumber[i] == unumber[i]) {
            a_counts++
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (rnumber[i] == unumber[j]) {
                bx_counts++;
            }
        }
    }
    b_counts = bx_counts - a_counts;
    return a_counts + "A" + b_counts + "B";
}



