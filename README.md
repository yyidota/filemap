## Introduce
`filemap.js` is a tool for creating files structure tree map. It's light, fast, and clever. It helps you to creat a files structure tree map automatically by one line of command.

## Usage && Example
```
git clone git@github.com:jrainlau/filemap.git
cd ./filemap && cd example

node filemap.js
```
(PS: Make sure you've placed the `filemap.js` to the root folder)

And you will get a files structure tree map like this
```
The files tree is:
=================


  |__ empty.js

  |__ folder1

    |__ folder-inside.md

  |__ folder2

    |__ inside1

      |__ 5555.txt

    |__ inside2

      |__ hello.txt

      |__ staff

        |__ test.txt

  |__ some.html

  |__ TEST

    |__ xxx

  |__ test.md
```
```
node filemap.js -i node_modules -m 1
```
```
The folders tree is:
============================



  |__ folder1
  
  |__ folder2

    |__ inside1

    |__ inside2
    
      |__ staff

  |__ TEST


```

## Options
```
node filemap.js <-i folder-name folder-name folder-name ...>
```
```
node filemap.js -i node_modules -m 1 //只遍历除node_modules以外的文件夹
node filemap.js -i node_modules //只遍历除node_modules以外的文件夹以及文件
```
- <-i folder-name>: In order to ignore some folders which contains lots of files and folders, such as `node_modules` etc, you could use this command to avoid them to be unfolded. Use blank to split each `folder-name`.

## License
MIT
