import shorid from 'shortid';

const Users = () => {
  const users = [
    {
      id: shorid.generate(),
      username: 'testUser123',
      password: 'test123'
    },
    {
      id: shorid.generate(),
      username: 'Mateoq',
      password: 'Mateo123'
    }
  ];

  return {
    get() { return users; },
    getByUsername(username) {
      return users.find((user) => (
        user.username === username
      ));
    }
  };
};

if (!process.users) {
  const users = Users();
  process.users = users;
}

export default process.users;
