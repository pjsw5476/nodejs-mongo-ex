// const passport = require("passport");

// const auth = (req,res,next) => {
//     console.log('/auth.js')
//     passport.authenticate("local", function(err, user, info) {
//     if (err) {
//         return res.status(400).json({ errors: err });
//     }
//     if (!user) {
//         return res.status(400).json({ errors: "No user found11" });
//     }
//     req.logIn(user, function(err) {
//         if (err) {
//             return res.status(400).json({ errors: err });
//         }
//         return res.status(200).json({ success: `logged in ${user.id}` });
//         });
//     })(req, res, next);
// }

// module.exports = auth;