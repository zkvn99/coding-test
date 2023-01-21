function solution(s) {
    s = s.toLowerCase(); // 소문자로 전부 치환
    let sArray = s.split(''); // 전부 배열로 나눔
    sArray[0] = sArray[0].toUpperCase(); // 첫번째 인덱스 대문자로 치환
    for (let i=0; i<sArray.length; i++)
        {
            while(sArray[i] == ' ') // 공백인 경우 반복
                {
                    i += 1; // 다음 인덱스로 넘어가기 위해 더함
                    if(!sArray[i]?.length) // 배열에 문자가 비어있으면 종료
                        break;
                    if(sArray[i] != ' ') // 공백이 아닐 경우 
                        {
                            sArray[i] = sArray[i].toUpperCase();// 대문자로 치환
                            break;
                        }
                }
        }
    return sArray.join(''); 
}
