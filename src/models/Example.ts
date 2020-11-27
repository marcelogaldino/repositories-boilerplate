class Examples {
  public examples: string

  public furtherData: string

  constructor({ examples, furtherData }: Omit<Examples, ''>) {
    this.examples = examples
    this.furtherData = furtherData
  }
}

export default Examples