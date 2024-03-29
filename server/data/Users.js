import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: "123456",
  },
];

export default users;
