import { User } from 'src/interfacess';
import { data } from '..//index';
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

  if (password === authUser.password) {
    return { error: false, errorText: '' };
  } else {
    return { error: true, errorText: 'Incorrect password.' };
  }
}
