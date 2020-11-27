import Examples from '../models/Example'

interface CreateExampleDTO {
  examples: string;
  furtherData: string;
}

class ExampleRepository {
  private examples: Examples[]

  constructor() {
    this.examples = []
  }

  public create({ examples, furtherData }: CreateExampleDTO): Examples {
    const example = new Examples({ examples, furtherData })

    this.examples.push(example)

    return example
  }
}

export default ExampleRepository