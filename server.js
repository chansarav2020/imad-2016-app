var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
  'article-one':{
  title:'Article One From Chandru',
  heading:'Article One',
  date: 'Sept 22, 2016',
  content: `<p>
                This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.
            </p>
            <p>
                This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.
            </p>
            <p>
                This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.
            </p>
            <p>
                This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.
            </p>`
},
'article-two':{
  title:'Article Two From Chandru',
  heading:'Article Two',
  date: 'Sept 23, 2016',
  content:`<p>
                This is Second article. This is Second article. This is Second article. This is Second article.
            </p>
            <p>
                This is Second article.
            </p>`

},
'article-three':{
  title:'Article Three From Chandru',
  heading:'Article Three',
  date: 'Sept 23, 2016',
  content:`<p>
                This is Third article. This is Third article. This is Third article. This is Third article.
            </p>
            <p>
                This is Third article.
            </p>`

}
};
function creatTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date= data.date;
    var content=data.content;
    var htmlTempalte= `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
          <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
              ${heading}
            </h3>
            <div>
              ${date}
            </div>
            <div>
              ${content}
            </div>
          </div>
        </body>
    </html>
    `;
    return htmlTempalte;
  }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
  var articleName= req.params.articleName;
  res.send(creatTemplate(articles[articleName]));
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
