import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'y10i',
  apiKey: process.env.API_KEY || '',
})