// Write a function that takes a string, N, and a single character, M, and returns the first index of that character. If the character does not appear, the function should return -1.


function findCharacter(str, char) {
 let strSeparate = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    } else {
      return -1
    }
  }
}

findCharacter("hello", 'o')
