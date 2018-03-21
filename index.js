const app = require('express')();
app.use("/", require('express').static(__dirname + "/public"));

app.listen(process.env.PORT || 3000);