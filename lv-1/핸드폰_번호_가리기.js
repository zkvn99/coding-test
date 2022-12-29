function solution(phone_number) {
    var arrayPhone = [...phone_number];
    var arrayResult = [];
    let backFour = phone_number.length - 4;
    for (let i=0; i<backFour; i++)
        {
            arrayResult = arrayPhone.splice(i,1,'*');
        }
    var answer = arrayPhone.join('');
    return answer;
}