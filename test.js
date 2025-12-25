// let a = 1
// let b = typeof(a)
// console.log(b)
// console.log(new Date().toISOString());
// import fs from 'fs/promises'
// import { fileJsonToArr } from './utils/utilsFile.js';

// const createUser = async (newUser) => {
//     try {
//         const users = await fileJsonToArr("./db/users.json")
//         const findUser = users.find((user) => user.username === newUser.username) 
//         if(findUser !== undefined)
//             return findUser
//         else{
//         users.push(newUser)
//         await writeFileToJson("./db/users.json",users)
//         console.log(1)
//         return {users:users}       
//         }
//     }catch (err){ 
//         return {err:err}
//     }
// }


// async function writeFileToJson(filePath,data) {
//   try {
//     // Write text to a file
//     // await fs.writeFile(filePath, 'Hello, World!', 'utf8');

//     // Write JSON data
//     // const data = { name: 'John', age: 30, city: 'New York' };
//     await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
//     console.log('Files created successfully');
//   } catch (err) {
//     console.error('Error writing files:', err);
//   }
// }
// createUser("./db/users.json",{a:3})