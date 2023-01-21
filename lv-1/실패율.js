function solution(N, stages) {
    var answer = [];
    let leftover= stages.length; // 남아있는 사람 수
    var failable = []; 
    
    for (i=1; i<N+1; i++)
        {
            failable[i] = stages.filter(n => n == i).length; // 단계별로 머물러 있는 사람
            answer.push([i, failable[i] / leftover]); // 단계와 실패율을 함께 answer에 저장
            leftover -= failable[i]; // 다음 스테이지 못올라온 사람 제외
        }
    answer = answer.sort((a,b) => b[1] - a[1]) // 실패율만 정렬
    return answer.map(a => a[0]); // 스테이지만 출력
}