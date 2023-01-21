function solution(sizes) {
    let width = []; // 가로
    let height = []; // 세로
    let size = (a,b) => a*b; // 넓이
    sizes.map((size,i) => { // size 배열 값, i 인덱스
        width[i] = Math.max(...size); // 큰 값을 가로에 넣고
        height[i] = Math.min(...size); // 작은 값을 세로에 넣음
    })
    return size(Math.max(...width),Math.max(...height)); // 각자 넣은 값에서 가장 큰 값을 추출 후 넓이
}