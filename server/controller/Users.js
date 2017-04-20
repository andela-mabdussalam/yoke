import validateInput from '../shared/validations/signup';
import User from '../models/user';

class Users {

  /**
  * Create a user
  * @param {Object} req Request object
  * @param {Object} res Response object
  * @returns {Object} - Returns response object
  */
  static create(req, res) {
    const { isValid } = validateInput(req.body);
    if (isValid) {
      const { username, email, password } = req.body;
      const newUser = User({
        username,
        email,
        password,
      });

      newUser.save((err, user) => {
        if (err) throw err;
        console.log('User Successfully created!');
        return res.status(201).json({ user });
      });
    }
  }
}
export default Users;
