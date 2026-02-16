export class Person {
  firstname: string
  lastname: string
  age: number
  private _a: number

  static COUNTRY: string = "Thailand"

  constructor() {
    this.firstname = ""
    this.lastname = ""
    this.age = 0
    this._a = 1
  }

  setAge(age: number): void {
    this.age = age
  }

  getAge(): number {
    return this.age
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`
  }
}
