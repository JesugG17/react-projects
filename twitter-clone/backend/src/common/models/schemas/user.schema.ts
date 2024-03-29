import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  userName: {
    type: String,
    require: [true, 'The username is required'],
  },
  email: {
    type: String,
    require: [true, 'The email is required'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'The password is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  photoUrl: {
    type: String,
    default: null,
  },
});

export const User = model('User', UserSchema);
