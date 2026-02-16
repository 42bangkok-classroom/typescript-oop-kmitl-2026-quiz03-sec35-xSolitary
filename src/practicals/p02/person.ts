export class Person {
  firstname: string
  lastname: string

  private _age: number

  static COUNTRY: string = "Thailand"

  constructor() {
    this.firstname = ""
    this.lastname = ""
    this._age = 0
  }

  setAge(age: number): void {
    if (age >= 0) {
      this._age = age
    }
  }

  getAge(): number {
    return this._age
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`
  }
}
