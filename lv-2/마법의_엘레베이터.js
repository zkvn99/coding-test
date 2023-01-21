function solution(storey) {
    let arrStorey =[...String(storey)];
    var answer = 0;
    if (storey < 0)
        return answer = 0;
    else
        {
        for (let i=0; i<arrStorey.length; i++)
            {
                let arrP = parseInt(arrStorey[i]);
                let arrP2 = parseInt(arrStorey[i+1]);
                if(arrP < 5)
                    answer += arrP;
                else if(arrP >= 5 && arrP2 >= 5)
                    {
                        answer += (10 - arrP);
                        arrStorey[i+1] = arrP2+1;
                        console.log(arrStorey[i+1]);
                    }
                else if(arrP >= 6)
                    {
                    answer += (11 - arrP);
                    }
                else
                    answer += arrP;
            }
        }
    return answer;
}
//문자열 배열로 매개변수를 받은 뒤 개수만큼 반복문 실행 
//3가지 조건으로 반복문 실행 5보다 작을경우 그대로 answer에 추가
//5보다 크거나 같고 다음수도 5보다 크거나 같을 때 10에서 뺀값을 answer에 추가
//6보다 클 경우 11에서 뺀값을 answer에 추가 나머지 경우는 그대로 값 추가
