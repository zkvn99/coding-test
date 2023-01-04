function solution(lottos, win_nums) {
    var first = 7;
    var second = 1;
    lottos.forEach(e => {if(win_nums.indexOf(e) > -1 || e == 0)
        first -= 1;
                         if(win_nums.indexOf(e) == -1)
                             second += 1;});
    if (second > 6)
        second = 6;

    if (first >= 6)
        first = 6;

    return answer = [first,second];
}
// 최고순위 최저순위 값 지정 후
// indexOf 활용 값이 찾아지면 최고순위 값 수정
// 반대의 경우 최저순위 값 수정
// 6개 or 5개 틀렸을경우 등수가 같아 if로 값 동결