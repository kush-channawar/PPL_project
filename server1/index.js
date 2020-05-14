const express = require("express");
const app = express();
const applet = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const pdfTemplate = require('./documents');



app.use(cors());
app.use(express.json());
applet.use(cors());
applet.use(bodyParser.urlencoded({extended:true}));
applet.use(bodyParser.json());
applet.use(express.static('public'));
app.use('/auth', require("./routes/jwtauth"));
app.use('/dashboard', require("./routes/dashboard"));

// post routes
applet.post('/create-pdf', async (req, res) => {
    pdf.create(pdfTemplate(req.body), {} ).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});



applet.get('/fetch-pdf', async (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
});

app.listen(5000, () => {
    console.log("server started on port 5000");
});