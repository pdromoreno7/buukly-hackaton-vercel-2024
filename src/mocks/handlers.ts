import { rest } from 'msw'

export const handlers = [
  rest.post('/generate', async (_req, res, ctx) => {
    return res(ctx.json(await import('../mocks/generate/ok.json')))
  }),
  rest.get('/user', async (_req, res, ctx) => {
    return res(ctx.json(await import('../mocks/generate/ok.json')))
  }),
]
