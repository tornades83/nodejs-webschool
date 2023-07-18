const a = 2+1;
import * as fs from 'fs'
console.log({a})

const sum = (num1,num2) => {
    return num1 + num2
}
console.log(sum(2,2))
const price = await generatePrimeSync('coca')
console.log(price)

fs.readFile('/file.md').then((result) => console.log({result})).catch((error) => console.log({error}));