const name = "sneha-saini"
const repoCount = 10

// console.log(name+ repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const getName = new String('snehaha') //declaring string
console.log(getName[0])
console.log(getName.__proto__)

console.log(getName.length)
console.log(getName.toUpperCase)
console.log(getName.charAt(2))
console.log(getName.indexOf('e'))

const newString = getName.substring(0,5)
console.log(newString)

const newStr = getName.slice(-8,5)
console.log(newStr)

const str1 = "   sneha   "
// console.log(str1.trim()) -->removes extra spaces

const url = "https://hitesh.com/%20somthng"
url.replace('%20','-')

url.includes('sneha')
console.log(url.split('/'))
 