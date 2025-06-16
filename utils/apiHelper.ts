import { request } from '@playwright/test';

export async function getUser(id: number) {
  const context = await request.newContext();
  const response = await context.get(`https://reqres.in/api/users/${id}`);
  const body = await response.json();
  return body;
}
