// Write a function that accepts a string a reverses it.

const reverseString = (string) => {
  let newString = ''

  for(let i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  return newString
}
reverseString('Aaron')

// Now do it recursively

const reverse = (str) => {
  if(str.length <= 1) {
    return str
  }
  return reverse(str.substr(1)) + str[0]
}

console.log(reverse('amalia'))
