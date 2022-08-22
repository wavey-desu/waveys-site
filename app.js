const express = require("express");
const bodyParser = require("body-parser")
const $ = require( 'jquery');
const app = express();
const TeleBot = require('telebot');
require('dotenv').config()


const bot = new TeleBot(process.env.TELEBOT_TOKEN);

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index");
})

app.post("/submit", function(req,res){
    let name = req.body.fullName;
    let email = req.body.email;
    let description = req.body.description

    let message ='NEW MESSAGE MAFAKA \n\n' + "Name: " + name + '\r\n' + 'Email: ' + email + '\r\n' + 'Desctription: ' + description;

    bot.sendMessage(process.env.CHAT_ID, message);
    res.redirect("/#contact");
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3005;
}

app.listen(port, function(){
    console.log("App Started");
})