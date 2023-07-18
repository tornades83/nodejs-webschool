// import { randomFillSync } from 'crypto';
// import {readFileSync, readFile , writeFileSync, appendFileSync } from 'fs'
// import {checkEven, sum} from './utils.js'//1
// import checkEven from './utils.js'
// import getNotes from './note.js'//2
import chalk from 'chalk';//5
import yargs from "yargs";//6
// import { sum } from "./utils";
import { addTexteToFile } from "./utils.js";

//5//

// console.log(chalk.blue('Hello world!'));

// const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello ') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello 5', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));




// console.log(chalk.bgRed(process.argv[2]))

// if(process.argv[2] === 'add') {
//   console.log(Number(process.argv[3]) + Number(process.argv[4]))
// }
// if(process.argv[2] === 'sous') {
//   console.log(Number(process.argv[3]) - Number(process.argv[4]))
// }




//6//
// process.stdin.on('data', (data)  => {
//     if(checkEven (data))
//     process.stdout.write(`C'est pair`)
//     else process.stdout.write(`C'est impair`)
//     process.stdout.write("Verifier si votre nombre est pair:")
//   });
// process.stdin.on('data', (data)  => {
//   const name = data.toString().toUpperCase()
//   if(name !== '\r\n')
//   process.stdout.write(`Hello ${name}`)
//   else process.stdout.write('Input was empty')
// });



// 7//
//create add comand//

yargs.command({

//   command:'UpdateTexteToFile',
// describe: 'Update texte to file ',
// handler: (arg) => {
//   const {text} = arg;
//   console.log(text)
//  } 
//   command:'ListTexteToFile',
// describe: 'List texte to file ',
// handler: (arg) => {
//   const {text} = arg;
//   console.log(text)
//  } 

//   command:'ReadTexteToFile',
// describe: 'Readtexte to file ',
// handler: (arg) => {
//   const {text} = arg;
//   console.log(text)
//  } 

// command:'removeTexteToFile',
// describe: 'remove texte to file ',
// handler: (arg) => {
//   const {text} = arg;
//   console.log(text)
//  } 

  command:'addTexteToFile',
  describe:'add texte to file',
   handler: (arg) => {
    const {text} = arg;
    addTexteToFile(text)
   } 
})

yargs.parse()








//1//

// console.log(sum(3,4), checkEven(5)) 




// console.log(getNotes());//2







// const variable = 'aller a'
//  writeFileSync('./file.txt' , ' hello world');
// appendFileSync('./file.txt', " hello big boss" + "\n" +"a la ligne2");
// appendFileSync('./file.txt', ` rajout numero 2 
// a la ligne`) // pour aller a la ligne il faux metre le ` a la place des apostrofe
// const a = readFileSync('./file.txt');
// console.log(a);


// const a = () => {
//     setTimeout(() => console.log('a'),1000)
// }
// const b = () => {
//     console.log('b')
// }
// a()
// b()

// const myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function(){ myResolve("I love You !!"); }, 3000);
//   });
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });


//   myPromise
//   .then(handleFulfilledA, handleRejectedA)
//   .then(handleFulfilledB, handleRejectedB)
//   .then(handleFulfilledC, handleRejectedC);
//   promise.all([])
// const data = readFile('./file.txt' ,() => console.log('finish'));
// // const data = readFileSync('./file.txt');
// console.log(data);
// // moreWork(); 