import fs from 'fs/promises'

async function fileJsonToArr(filePath){
    try{
        const res = await fs.readFile(filePath,'utf-8')
        const users = await JSON.parse(res)
        return users
    } catch(err){
        console.error(err)
    }}

async function writeFileToJson(filePath,data) {
  try {

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}





export {
    fileJsonToArr,
    writeFileToJson,
}
    
