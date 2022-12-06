import * as readline from 'readline'
import * as fs from 'fs'

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter problem name: ', (answer) => {
    
    let fileName = answer.replace(' ', '_').replace('.', '')

    fs.writeFile(fileName + '.ts', '',  function(err) {
        if (err) {
            return console.error(err)
        }
    })

    fs.writeFile('./__tests__/'+fileName+'.tests.ts', '',  function(err) {
        if (err) {
            return console.error(err)
        }
    })

  rl.close()

  console.log('Done!')
})