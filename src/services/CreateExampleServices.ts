import ExampleRepository from '../repositories/ExampleRepository'
import Example from '../models/Example'

interface Request {
  examples: string;
  furtherData: string;
}

class CreateExampleServices {
  private exampleRepositories: ExampleRepository

  constructor(exampleRepository: ExampleRepository) {
    this.exampleRepositories = exampleRepository
  }

  public execute({ examples, furtherData }: Request): Example {
    if (furtherData.length > 10) {
      throw new Error('Further Data cannot have more than 10 characters!')
    }

    const example = this.exampleRepositories.create({ examples, furtherData })

    return example
  }
}

export default CreateExampleServices