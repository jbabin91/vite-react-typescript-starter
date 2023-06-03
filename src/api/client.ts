import { makeApi, makeErrors, Zodios } from '@zodios/core';
import { z } from 'zod';

const errors = makeErrors([
  {
    schema: z.object({
      error: z.object({
        code: z.number(),
        message: z.string(),
      }),
    }),
    status: 'default',
  },
]);

const user = z
  .object({
    username: z.string(),
  })
  .partial();

const endpoints = makeApi([
  {
    alias: 'login',
    errors,
    method: 'post',
    path: '/login',
    response: z.object({}).partial(),
  },
  {
    alias: 'getUser',
    errors,
    method: 'get',
    path: '/user',
    response: user,
  },
]);

export const apiClient = new Zodios('/api', endpoints);
