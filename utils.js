import { writeFileSync} from "fs";

  export const sum = (a,b) => {
    return a + b;

}
 export const checkEven = (number) => {
    return number % 2 == 0;
}
export const addTexteToFile = (text)  => {
  writeFileSync('./file.txt', text)
}
// export const UpdateTexteToFile = (text)  => {
//     writeFileSync('./file.txt', text)
//   }
//   export const ListTexteToFile = (text)  => {
//     writeFileSync('./file.txt', text)
//   }
//   export const ReadTexteToFile = (text)  => {
//     writeFileSync('./file.txt', text)
//   }
//   export const removeTexteToFile = (text)  => {
//     writeFileSync('./file.txt', text)
//   }
// export default checkEven;
// module.exports(sum, checkEven, )