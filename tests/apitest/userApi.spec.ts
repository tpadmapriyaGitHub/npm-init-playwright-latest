import { test, expect } from '@playwright/test';
import { getUser } from '../../utils/apiHelper';

test('Get user data via API', async () => {
  const user = await getUser(2);
  expect(user.data.email).toBe('janet.weaver@reqres.in');
});
test('Get user data with invalid ID', async () => {
  const user = await getUser(999);
  expect(user).toEqual({
    data: null,
    support: {
      url: 'https://reqres.in/#support-heading',
      text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
    }
  });
});