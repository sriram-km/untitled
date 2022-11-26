// imports
const express = require('express')
const app = express()
const port = 5000
// app.use(express.json())
app.use(express.urlencoded({extended: true}))

var appwrite = require("./modules/appwrite");


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
}
)

app.get('/editor', (req, res) => {
    res.render('editor')
}
)

app.get('/api/files', (req, res) => {
    appwrite.getFiles(res);
}
)

app.get('/api/file', (req, res) => {
    fileId = req.query.fileId;
    appwrite.getFile(fileId,res);
}
)

app.get('/api/deletefile', (req, res) => {
    fileId = req.query.fileId;
    appwrite.deleteFile(fileId,res);
}
)

app.post('/api/createfile', (req, res) => {
    fileName = req.body.filename;
    data = req.body.data;
    appwrite.createFile(fileName,data,res);
}
)

app.post('/api/updatefile', (req, res) => {
    fileId = req.body.fileId;
    data = req.body.data;
    fileName = req.body.filename;
    appwrite.updateFile(fileId,fileName,data,res);
}
)


// Listen on port 5000
app.listen(port, () => console.info("Listening"))