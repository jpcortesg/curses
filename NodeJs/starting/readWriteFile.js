const fs = require('fs')

// fs.writeFile('./text.txt', 'Line one', function(err){
//   if(err){
//     console.log(err)
//   }
//   console.log('File Created')
// })

// console.log('last line of code')

fs.readFile('./text.txt', function(err, data){
  if(err) console.log(err)
  else console.log(data.toString())
})