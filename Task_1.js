const readline = require("readline-sync")
let n = Number(readline.question("Enter number of words : "))
console.log("There are " + n + "  Words")
var words=[]
for(let i=0;i<n;i++)
{
    let word=readline.question("Enter the word :")
    words.push(word)
}


    console.log(words)

const count = {}

for (let index = 0; index < words.length; index++) {
  const element = words[index]

  if (count[element]) {
    count[element] += 1
  } else {
    count[element] = 1
  }
}
console.log(Object.keys(count).length)
console.log(count)