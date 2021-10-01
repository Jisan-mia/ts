export class Player {
  name: string
  private age:  number
  country: string

  constructor(name: string, age: number, country: string) {
    this.name = name
    this.age = age
    this.country = country
  }

  play() {
    return `${this.name} is playing from ${this.country}`
  }

}