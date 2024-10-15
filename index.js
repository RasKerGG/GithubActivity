const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Введите имя пользователя: ', (user) => {
    let link = `https://api.github.com/users/${user}/events`;
    fetch(link).then(response => response.json()).then(result => {
        result.forEach(element => {
            if (element.payload.issue) {
                console.log(`Тип действия: ${element.type}. Репозиторий: ${element.repo.name}. Статус: ${element.payload.action}. Название: ${element.payload.issue.title}`)
            }
            else {
                console.log(`Тип действия: ${element.type}. Репозиторий: ${element.repo.name}. Статус: ${element.payload.action}.`)
            } 
        });
    })
    rl.close()
})