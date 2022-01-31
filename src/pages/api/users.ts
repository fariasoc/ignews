import { NextApiRequest, NextApiResponse } from 'next'

export default ( request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Caroll'},
    {id: 2, name: 'Celso'},
    {id: 3, name: 'Bailey'},
  ]

  return response.json(users)

}
