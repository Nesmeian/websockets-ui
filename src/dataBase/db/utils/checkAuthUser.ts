import { User } from 'src/interfacess';
import { connectUsers, data } from '..//index';
export default function checkAuthUser(user: User): {
  error: boolean;
  errorText: string;
} {
  const { users } = data;
  const password = user.password;
  const authUser = users.find(({ name }) => user.name === name);
  if (authUser === undefined) {
    return { error: false, errorText: '' };
  }
  if (connectUsers.get(authUser.id)) {
    return { error: true, errorText: 'User is already playing' };
  }
  if (password === authUser.password) {
    return { error: false, errorText: '' };
  } else {
    return { error: true, errorText: 'Incorrect password.' };
  }
}
