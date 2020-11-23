import { Router } from 'express'

import ExamplesRepository from '../repositories/ExampleRepository'

const exampleRoutes = Router()

const myExamples = new ExamplesRepository()

exampleRoutes.post('/', (request, response) => {
    const { examples, furtherData } = request.body

    const example = myExamples.create(examples, furtherData)

    return response.json(example)
})

export default exampleRoutes