// tutorial: https://www.tutorialspoint.com/expressjs/
// 6 Serving Static Files

// express
var express = require("express")
var app 	= express()

//
app.use("/static", express.static("public"))
app.use(express.static("public"))

app.get("/", function(req, res) {
})


// listen
app.listen(3000)
