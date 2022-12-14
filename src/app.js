import express from 'express';

const app = express();

app.use(express.json());

const authorize = (req, res, next) => {
  const auth = { login: 'test', password: 'test' }; // change this

  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64')
    .toString()
    .split(':');

  if (login && password && login === auth.login && password === auth.password) {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="401"');
  res.status(401).send('Authentication required.');
};

app.use('/', authorize);
app.use('/', express.static('build'));

app.listen(3000);

export function testtest() {
  alert(5);
}
