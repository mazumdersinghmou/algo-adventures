var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedS = s.split("").reverse().join("");
  return reversedS === s;
};