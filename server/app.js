const express = require('express');
const app = express();
const config = require("./serverConfig.json");
const $ = require('./libs/mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

$.connect(error => {
    if(error) throw error;

    console.log("Successfully connected to data store.")
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(cors());

app.listen(config.port, config.host, error => {
    if(error) throw error;

    console.log("Server started!");
});

app.post('/register', (req, res) => {
    $.query(`SELECT * FROM blog.users WHERE username = '${req.body.username}'`, (err, data) => {
        if(err) res.send("-1");

        if(data.length) {
            res.send("User already existing!");
        } else {
            $.query(`INSERT INTO blog.users (username, password) VALUES ('${req.body.username}', '${Buffer.from(req.body.password).toString('base64')}')`, (err, data) => {
                if(err) res.send("-1");

                res.send("1");
            });
        }
    });
});

app.post('/login', (req, res) => {
    $.query(`SELECT * FROM blog.users WHERE username = '${req.body.username}' AND password = '${Buffer.from(req.body.password).toString('base64')}'`, (err, data) => {
        if(!data.length) {
            res.send("Incorrect username or password!");
        } else {
            res.send(data);
        }
    });
});

app.post('/avatar', (req, res) => {
   $.query(`UPDATE blog.users SET avatarUrl = '${req.body.avatarUrl}' WHERE username = '${req.body.username}'`, (err, data) => {
      if(err) res.send(err);

      res.send(data);
   });
});

app.post('/bio', (req, res) => {
    $.query(`UPDATE blog.users SET bio = '${req.body.bio}' WHERE username = '${req.body.username}'`, (err, data) => {
        if(err) res.send(err);

        res.send(data);
    });
});

app.post('/password', (req, res) => {
    $.query(`UPDATE blog.users SET password = '${Buffer.from(req.body.password).toString("base64")}' WHERE username = '${req.body.username}'`, (err, data) => {
        if(err) res.send(err);

        res.send(data);
    });
});

app.post('/username', (req, res) => {
    $.query(`UPDATE blog.users SET username = '${req.body.username}' WHERE id = '${req.body.id}'`, (err, data) => {
        if(err) res.send(err);

        res.send(data);
    });
});

app.post('/uploadPost', (req, res) => {
    $.query(`INSERT INTO blog.posts (authorName, content) VALUES ('${req.body.username}', '${req.body.content}')`, (err, data) => {
        if(err) res.send(err);

        res.send(data);
    });
});

app.get('/users', (req, res) => {
    $.query(`SELECT * FROM blog.users`, (err, data) => {
        if(err) res.send(err);

        res.send(JSON.stringify(data));
    });
});

app.get('/posts', (req, res) => {
    $.query(`SELECT * FROM blog.posts`, (err, data) => {
        if(err) res.send(err);

        res.send(data);
    });
});