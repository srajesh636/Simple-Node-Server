const chalk = require('chalk')
const http = require('http')
const port = 8080
const server = http.createServer((req, res) => {
  res.write('Hello World')
  res.end()
})

server.listen(port, (error) => {
  error ? console.log(chalk.red('Compilation failed !'))
    : console.group()
  console.log('compiled successfully !')
  console.log(chalk.cyan(`\n Running on port ${port} `))
  console.groupEnd()
})
