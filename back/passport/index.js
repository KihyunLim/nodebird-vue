const passport = require('passport');
const local = require('./local');
const db = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    // /user/login의 req.login이 들어와서 세션에 id만(사용자가 많을 경우 메모리를 많이 차지하기 때문에) 저장함
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        attributes: ['id', 'nickname'],
        include: [
          {
            model: db.Post,
            attributes: ['id'],
          },
          {
            model: db.User,
            as: 'Followings',
            attributes: ['id'],
          },
          {
            model: db.User,
            as: 'Followers',
            attributes: ['id'],
          },
        ],
      });
      return done(null, user); // 로그인 이후 모든 요청마다 req.user에 들어있음, req.isAuthenticated() === true 해줌
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
  local();
};
