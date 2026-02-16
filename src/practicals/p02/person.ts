export class Person {
  firstname?: string
  lastname?: string

  private _age: number = 0

  static COUNTRY = "Thailand"

  constructor() {}

  setAge(age: number) {
    if (age >= 0) {
      this._age = age
    }
  }

  getAge() {
    return this._age
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`
  }
}
