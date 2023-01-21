function solution(today, terms, privacies) {
    var answer = [];
    let termsArray = []; // 알파벳과 기간을 담는 배열
    let privaciesArray = []; // 날짜와 알파벳을 담는 배열
    for (let i=0; i<terms.length; i++)
        {
            termsArray[i] = terms[i].split(" "); // 알파벳과 기간을 분리하여 저장
        }
    for (let j=0; j<privacies.length; j++)
        {
            let count = 0;
            privaciesArray[j] = privacies[j].split(" "); // 날짜와 알파벳을 분리하여 저장
            while (true)
                {
                    if(privaciesArray[j][1] === termsArray[count][0]) // 알파벳이 일치하는 경우
                        {
                            count = termsArray[count][1]; // 알파벳에 맞는 기간을 count에 저장
                            break;
                        }
                    count += 1; // count는 자동으로 1씩 증가
                }
            let todayDate = new Date(today); // 현재 날짜를 Date 함수로 변경
            let prDate = new Date(privaciesArray[j][0]); // 유효기간을 Date 함수로 변경
            todayDate = new Date( // 현재 날짜에서 유효기간만큼 빼기
                todayDate.getFullYear(),
                todayDate.getMonth() - count,
                todayDate.getDate());
            if (todayDate >= prDate) // 유효기간이 지나지 않으면 answer에 값 저장
                {
                    answer.push(j+1)
                }
        }  
    return answer;
}
