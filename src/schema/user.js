import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email must be unique'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: [true, 'Username must be unique'],
      match: [
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores',
      ],
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', function () {
  const user = this;

  if (user.isModified('password')) {
    const SALT = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, SALT);
  }

  if (!user.avatar) {
    user.avatar = `https://robohash.org/${user.username}`;
  }
});
const User = mongoose.model('User', userSchema);
export default User;
