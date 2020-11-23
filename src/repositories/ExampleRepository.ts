import Examples from '../models/Example'

class ExampleRepository {
    private examples: Examples[]

    constructor() {
        this.examples = []
    }

    public create(example: string, furtherData: string ): Examples {
        const examples = new Examples(example, furtherData)

        this.examples.push(examples)

        return examples
    }
}

export default ExampleRepository