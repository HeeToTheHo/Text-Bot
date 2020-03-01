const Discord = require('discord.js');
const { twilioid, twiliokey, fromnumber } = require("../config.json");
const client = require('twilio')(twilioid, twiliokey); 

module.exports = {
    name: "text",
    description: "Text someone!",
    execute(msg, args) {
        var tonumber = args[0];
        var message = args[1];
        client.messages 
      .create({ 
         body: `${message}`, 
         from: `${fromnumber}`,      
         to: `${tonumber}` 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
      msg.channel.send("Your message has been sent!");
    }
}