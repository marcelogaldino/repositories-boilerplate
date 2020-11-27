import { Router } from 'express'

import ExamplesRepository from '../repositories/ExampleRepository'
import CreateExampleService from '../services/CreateExampleServices'

const exampleRoutes = Router()

const exampleRepository = new ExamplesRepository()

exampleRoutes.post('/', (request, response) => {
  try {
    const { examples, furtherData } = request.body

    const createEexample = new CreateExampleService(exampleRepository)

    const example = createEexample.execute({ examples, furtherData })

    return response.json(example)
  } catch (error) {
    return response.status(400).json({ error: error })
  }

})

export default exampleRoutes  