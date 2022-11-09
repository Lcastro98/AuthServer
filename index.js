const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Todo salio bien',
        uid: 1234
    })
})

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});