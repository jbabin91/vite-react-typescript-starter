import { rest } from 'msw';

export type GetResolver = Parameters<typeof rest.get>[1];
export type DeleteResolver = Parameters<typeof rest.delete>[1];
export type PutResolver = Parameters<typeof rest.put>[1];
export type PostResolver = Parameters<typeof rest.post>[1];

const BASE_URL = '/api';

export const handlers = [
  rest.post(`${BASE_URL}/login`, (_req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(ctx.status(200));
  }),

  rest.get(`${BASE_URL}/user`, (_req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
