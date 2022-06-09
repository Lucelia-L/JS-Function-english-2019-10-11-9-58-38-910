function alphabetSort(message){
    // wirte your code here
    let arr = message.split("");
    let len = arr.length;
    for(let i=0; i<len; i++){
        for(let j=1; j<len-i; j++){
            if(arr[j-1] > arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("");
  }
console.log(alphabetSort('hello')); // should return 'ehllo'