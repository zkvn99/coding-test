function solution(numbers) {
    var num = numbers;
    var answer = [];
    var s = 0;
    for (let i=0; i<num.length; i++)
        {
            for (let j=1; j<num.length; j++)
                {
                    if(i<j)
                    answer[s++] = num[i] + num[j]; 
                }
        }
    let set = new Set(answer);
    set = [...set];
    answer = set.sort(compare);
    return answer;
}

function compare(a,b){
    return a - b;
}
