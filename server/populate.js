import User from './models/user';

const newUser = User(
  {
    name: 'tolly',
    username: 'tinyloppy',
    password: 'torax',
  });

newUser.save((err) => {
  if (err) throw err;
  console.log('User created!');
});
