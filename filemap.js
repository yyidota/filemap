/**
 * @author Jrain Lau
 * @email jrainlau@163.com
 * @modifier yyidota
 * @email yyidota@163.com
 * @date 2016-07-22
 */

'use strict'
const fs = require('fs')

let ignoreCase = {}
let isFolder = false;
if (process.argv[2] === '-i') {
  for (let i of process.argv.slice(3)) {
    ignoreCase[i] = true
  }
}

if (process.argv[4] === '-m') {
  for (let i of process.argv.slice(5)) {
    isFolder = true
  }
}

console.log('\n\nThe files tree is:\n=================\n\n')

const placeHolder = (num) => {
  if (placeHolder.cache[num]) return placeHolder.cache[num] + '|__'
  placeHolder.cache[num] = ''
  for (let i = 0; i < num; i++) {
    placeHolder.cache[num] += '  '
  }
  return placeHolder.cache[num] + '|__'
}
placeHolder.cache = {}

let isDic = (url) => fs.statSync(url).isDirectory()

const traverseFiles = (path, deep) => {
  let files = fs.readdirSync(path)
  let con = false

  if (isFolder) {
    let folders = [];
    for (let i = files.length - 1; i >= 0; i--) {
      let dirPath = path + '\\' + files[i]
      con = ignoreCase[files[i]] === undefined ? true : false
      if (isDic(dirPath) && con) {
        folders.push(files[i]);
      }
    }

    for (let i = 0, len = folders.length; i < len; i++) {
      console.log(placeHolder(deep), folders[i], '\n')


      let dirPath = path + '\\' + folders[i]
      if (isDic(dirPath)) traverseFiles(dirPath, deep + 1)
    }
  } else {
    for (let i = 0, len = files.length; i < len; i++) {
      if (files[i] !== 'filemap.js') console.log(placeHolder(deep), files[i], '\n')
      con = ignoreCase[files[i]] === undefined ? true : false
      let dirPath = path + '\\' + files[i]
      if (isDic(dirPath) && con) traverseFiles(dirPath, deep + 1)
    }
  }
}

traverseFiles('./', 1)

process.exit()
