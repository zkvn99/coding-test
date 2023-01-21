function solution(s) {
    let str = s.split(" "); // 공백 기준으로 나누고 배열로 변환
    str.sort((a,b) => {return a - b;}); // 내림차순
    str.splice(1,str.length-2); // 첫번째 인덱스와 마지막 인덱스 제외 삭제
    return answer = str.join(' '); // 연결
}