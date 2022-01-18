//FIXME TEST_PASSPORT
const passport= require('passport')
const passportJwt= require('passport-jwt')

const configJWTStratey = (req,res) => {
    console.log('configJWTStratey');
    const opts={
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: "mysecretword", //FIXME
    };
    passport.use(new passportJwt.Strategy(opts, (payload,done) => {
        console.log("payload")
        console.log(payload)
        User.findOne({_id: payload._id}, function(err,user){
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            }else{
                return done(null, false);
            }
        })
    }));
}

module.exports = configJWTStratey;