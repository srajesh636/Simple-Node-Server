const chalk = require('chalk')
const http = require('http')
const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.write('A Simple Server created using Node !')
  res.end()
})

server.listen(port, (error) => {
  error ? console.log(chalk.red('Compilation failed !'))
    : console.log('\nCompiled successfully !')
  console.log(chalk.yellow('\nYour Server is :'))
  console.log(chalk.cyan(`Running on port ${port} `))
})
