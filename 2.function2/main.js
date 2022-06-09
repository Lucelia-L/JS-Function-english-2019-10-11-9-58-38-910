function palindrome(message) {
  // wirte your code here
  var len = message.length;
  for (let i = 0; i <= len / 2; i++) {
    if (message[i] != message[len - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("hello")); // should return false
console.log(palindrome("abcba")); // should return true
