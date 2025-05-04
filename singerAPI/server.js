const Singer = require('./entities/singer.js');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    fs.readFile('db/singers_DB.json', 'utf-8', (err, data) => {
        let singerData = '';
        let dataParsed = JSON.parse(data);
        for (let i = 0; i < dataParsed.length; i++) {
            singerData += `${dataParsed[i].name} ${dataParsed[i].surname}\n`;
        }
        res.send(singerData);
    }) 
})

app.post('/auth', (req, res) => {
    let credentials = req.body;
    if (credentials['login'] && credentials['password']) {
        return res.json({ token: 'Basic 934762837423nh23men23o3492' });
    }
    else return res.json({ status: 400 });
})

app.post('/newSinger', (req, res) => {
    if (req.body.data) {
        let newSinger = req.body.data;
        let singerHeaders;
        if (req.body.headers) {
            singerHeaders = req.body.headers['Authorization'];
        }

        if (singerHeaders !== 'Basic 934762837423nh23men23o3492' || !singerHeaders) {
            return res.json( {status: 403} );
        }

        if(newSinger['name'] && newSinger['surname'] && newSinger['genre'] && newSinger['country']) {
            let singer = new Singer(3, newSinger.name, newSinger.surname, newSinger.genre, newSinger.country);
            let singerName = singer.name;
            return res.json({ name: singerName, surname: singer.surname, genre: newSinger.genre, country: singer.country });  
        }
    }
    else {

        res.json({status: 400});
    } 
})

app.post('/newAlbum', (req, res) => {
    if(req.body['id']) {
        return res.json({ id: req.body.id, title: req.body.title, singer: req.body.singer, songs: req.body.songs, year: req.body.year, genre: req.body.genre, label: req.body.label })
    }
    else res.sendStatus(400);
});

app.post('/newSong', (req, res) => {
    if (req.body['id']) {
        return res.json({ id: req.body.id, title: req.body.title, composer: req.body.composer, writer: req.body.writer, genre: req.body.genre, year: req.body.year });
    }
    else res.sendStatus(400);
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})