const fs = require('fs')

const folder = '../test_folder'

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    const targetIndex = file.indexOf('_my_file')
    if(targetIndex !== -1){
      const new_name = file.slice(0, targetIndex) + '.txt'

      fs.rename(folder + '\\' + file, folder + '\\' +  new_name, (err, data) => {
        if(err) {
          console.log(err)
          return
        }
      })
    }

  })
})