const express = require('express');
const app = express();
app.use('*', (reg, res) => {
    console.log('Був запрос від браузера')
})
const listener = app.listen(7777, () => {
    console.log(`Сервер запущений на порті${listener.address().port}`);
});