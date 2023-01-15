function solution(k, m, score) {
    score.sort(function (a,b){
        return a - b;
    }) // scroe 정렬
    var answer = 0;
    let box = parseInt(score.length / m); // 상자 개수
    let scoreArray = [];
    let scoreLength = score.length; 
    console.log(scoreLength);

    for (let i=scoreLength; i>-1; i-=m) // 나오는 상자만큼 반복
        {
            scoreArray[i] = score.slice(i-m,i); // m개 단위로 뒤에서부터 추출
            if(box < 1) // 박스에 사과가 부족하면 return 0
                return 0;
            if(scoreArray[i].length !=0) // 배열에 내용이 있으면 
                answer += scoreArray[i][0] * m; // 첫번째 인덱스 점수 기준으로 곱하기
        }
    return answer;
}