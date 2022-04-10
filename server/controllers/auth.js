const users = [];
const bcrypt = require("bcryptjs");
module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    let found = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        if (bcrypt.compareSync(password, users[i].hash)) {
          correctUser = { ...users[i] };
          delete correctUser.hash;
          found = true;
          res.status(200).send(correctUser);
        }
      }
    }
    if (found === false) {
      console.log("no");
      res.status(400).send("User not found.");
    }
  },
  register: (req, res) => {
    console.log("Registering User");
    let { username, password, firstName, lastName, email } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    let user = { username, hash, firstName, lastName, email };
    users.push(user);
    const TempUser = { ...user };
    delete TempUser.hash;
    res.status(200).send(TempUser);
  },
};
