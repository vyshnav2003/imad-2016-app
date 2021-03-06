var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    title: 'Article one me vyshu',
    heading: 'Article one',
    date: 'Sep 5 2016',
    content: ` <p>
                this is the content of my first file.this is the content of my first file.this is the content of my first file.this is the content of my first file.this is the content of my first file.this is the content of my first file.
            </p>
            <p>
                this is the content of my first file.this is the content of my first file.this is the content of my first file.this is the content of my first file.this is the content of my first file.this is the content of my first file.
            </p>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
var content = data.content;


var htmltemplate = `
<html>
  <head>
      <title>
          ${title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
       </head>  
    <body>
        <div class= "container">
        <div>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            Article one
        </h3>
        <div>
            Sep28,2016
        </div>
        <div>
        ${content}
        </div>
    </div>
</div>
</body>
</html>
`;}
return htmlTemplate;

app.get('/:articleName', function (req, res){
    //articleName == article-one
    //article[articleName]== {} content object for article one
    var articleName = req.params.articleName; 
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
