import { faker } from '@faker-js/faker';
import { User } from "../../users/entities/user.entity";
import { define } from "typeorm-seeding";



define(User, () => {
  const user = new User();
  const email =faker.internet.email();
  const username = faker.name.fullName();
  user.email = email;
  user.password = faker.internet.password(20);
  user.role = +faker.random.numeric(1);
  user.username = username;
  user.worker = null;
   user.createBy = +faker.random.numeric(1);
  return user;
});