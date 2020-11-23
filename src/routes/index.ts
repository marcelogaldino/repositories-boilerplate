import { Router } from 'express'
import ExampleRoutes from '../routes/example.routes'

const routes = Router()

routes.use('/example', ExampleRoutes)

export default routes