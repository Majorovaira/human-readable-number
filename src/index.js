const hundred = 'hundred';
const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
   

module.exports = function toReadable (number) {
    if(number === 0) {
        return 'zero';
    }
    let result ='';
    const numberArr = number.toString().split('');
    const func =(first, second) => {
        let tensNumb = '';
        if(numberArr[first] === '0' || numberArr[first] === '1') {
            tensNumb = numbers[+ numberArr[first] * 10 + + numberArr[second]];
        }
        else {
            tensNumb = `${tens[numberArr[first]- 2]} ${numbers[numberArr[second]]}`;
        }
        return tensNumb;
    }


 
    if(numberArr.length === 3) {
        result = `${numbers[numberArr[0]]} ${hundred} ${func(1, 2)}`;
    }
    else if(numberArr.length === 2){
        result = func(0, 1);
    }
    else {
        result = numbers[number];
    }
    return result.trim();
}
