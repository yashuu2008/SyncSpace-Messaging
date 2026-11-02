import User from '../schema/user.js';
import crudRepository from './crudRepository.js';

const userRepository = {
  ...crudRepository(User), //destructuring the methods from crudRepository and now we can add more methods if we want
  getByMail: async function (email) {
    const user = await User.findOne({ email: email });
    return user;
  },
  getByUsername: async function (username) {
    const user = await User.findOne({ username: username }).select('-password'); // Exclude the password field from the result
    return user;
  },
};

export default userRepository;
