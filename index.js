const fs = require('fs')
const path = require('path')
const replaceThis = 'ThanoZ'
const replaceWith =  'Shresthhh'
const preview = false
const folder = __dirname

try{
    const data = fs.readdir(folder,(err, data)=>{
        // console.log(folder);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = path.join(folder , item.replaceAll(replaceThis, replaceWith))
            let oldFile = path.join(folder , item)
            if(!preview){
                fs.rename(oldFile, newFile, ()=>{
                    console.log("Rename Success!")
                })
            }
            else{
                if("data/" + item !== newFile){
                    console.log('data/' + item + ' will be renamed to ' + newFile)
                }
            }
        }
    })
}catch(err){
    console.error(err)
}
