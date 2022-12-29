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