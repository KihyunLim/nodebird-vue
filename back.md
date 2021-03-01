npm i express
- package.json에서 `"main": "app.js"`로 수정
- `"script"`에 `"dev": "node app.js"` 추가

npm i sequelize mysql2
npm i -D sequelize-cli

npx sequelize init
- models, migrations, seeders 폴더 생성해서 기본 세팅 해줌
- `models/index.js` 아래와 같이 초기 코드 수정
```js
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

npm i -D nodemon
- 서버 소스코드 수정하여 저장 시 자동 서버 재시작
- `"script"`에 `"dev": "nodemon app.js"` 추가

npm i cors
npm i bcrypt

npm i passport passport-local
- 일반 로그인일 경우 local, 구글/네이버/카카오 로그인일 경우 각각 passport-[??]로 설치

npm i express-session

npm i cookie-parser

npm i morgan
- 요청된 get, post 등 로그 남겨 줌

npm i multer
- formData 해석

npm i hpp helmet
- 보안 관련

npm i dotenv
npm i cross-env