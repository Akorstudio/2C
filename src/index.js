
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function canonize(url) {
  console.log(`get: ${url}`);
  if (url === null)
  return `Invalid username`;

  url = url.trim();
  const reg = new RegExp('@?(https?:)?(\/\/)?([^\/]*\/)?@?([_a-zA-Z0-9.]*)', 'i');
  return `@${url.match(reg)[4]}`;
}

app.get('/mytask2C', (req,res) => {
  const name = canonize(req.query.username);
  console.log(`send: ${name}`);
  res.send(name);
  });

/*
app.get('/mytask2B', (req,res) => {
  const name = (req.query.fullname.trim() || 0);
  console.log(name);
  if ((name === 0)|| (/[\d_\/]/.test(name))){
      res.send("Invalid fullname");
  }
  else {
    let shortName = name.split(/ +/);
    shortName.forEach((item, i, shortName) => {
      shortName[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
    });
    switch (shortName.length) {
      case 1:
        res.send(shortName[0]);
        break;
      case 2:
        res.send(shortName[1] + " " + shortName[0][0] + ".");
        break;
      case 3:
        res.send(shortName[2] + " " + shortName[0][0] + ". " + shortName[1][0] + ". ");
        break;
      default:
        res.send("Invalid fullname");
    }
  }
});*/

/*
app.get('/mytask2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});*/

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
