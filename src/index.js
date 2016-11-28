import express from 'express';
import cors from 'cors';
//import getColors from './colors';

const app = express();
app.use(cors());

const bigNumber = require('big-number');
app.get('/mytask2X', (req, res) => {
  let count = (n) => {
    if (n == 0) return 1;
      if (n == 1) return 6 * 3 * count(0);
      if (n == 2) return 6 * 2 * count(1) + 9 * 3 * count(0);
        return bigNumber(count(n - 1)).multiply(12).add(bigNumber(count(n - 2)).multiply(18));
      };

  let n = req.query.i;
  res.send(count(n).toString());
});

/*
const results = [
  1,
  18,
  243,
  3240,
  43254,
  577368,
  7706988,
  102876480,
  1373243544,
  18330699168,
  244686773808,
  3266193870720,
  43598688377184,
  581975750199168,
  7768485393179328,
  103697388221736960,
  1384201395738071424,
  18476969736848122368,
  246639261965462754048,
];

app.get('/mytask2X', (req, res) => {
  const query = req.query;
  if (query.i) {
  res.json(results[query.i]);
  console.log(query.i);
}
});


app.get('/mytask2D', (req, res) => {
  let color = "" + req.query.color;
  color = color.trim().toLowerCase().replace(/%20/g,' ') || '';
  console.log(req.query, color);
  res.send(getColors(color, res));

});


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
