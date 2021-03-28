const util = require('util')
const child_process = require('child_process')
const exec = util.promisify(child_process.exec)
const path = require('path')
const snippetPath = path.join(__dirname, 'sublimeSnippet')
const fs = require('fs')

const convert = async () => {
    const files = fs.readdirSync(snippetPath)
    let result = {}
    console.log(files)
    for (let index = 0; index < files.length; index++) 
    // await files.forEach(async (fileName, index) => 
    {
        let fileName = files[index]
        if (fileName.endsWith('.sublime-snippet')) {
            const res = (await exec(`atomizr ${fileName} --target vscode`, { cwd: snippetPath })).stdout
            // console.log(JSON.parse(res))
            Object.assign(result, JSON.parse(res))
        }
        // if (index === files.length - 1)
        //     console.log(result)
    }
    if (result) {
        const data = JSON.stringify(result, '', '\t')
        console.log(data)
        const vscode_path = path.join(__dirname, 'snippets/snippets.code-snippets')
        fs.writeFile(vscode_path, data, function (err) {
            console.error(err)
        })
    }
}


convert()