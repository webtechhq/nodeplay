var http = require("http");
var express = require("express");
var cwd = process.cwd();


console.log("8-Ball Server startup, Yo!");
console.log(cwd);

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("The 8-Ball says:\n\n");

    var answers = new Array(
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes - definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy, try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
    );

    var answer = answers[Math.floor(Math.random()*answers.length)];

    response.write(answer);
    response.end();

}).listen(8888);


