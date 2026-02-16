export class Student {
  firstname: string
  lastname: string

  constructor() {
    this.firstname = ""
    this.lastname = ""
  }

  printName(): void {
    console.log(`${this.firstname} ${this.lastname}`)
  }
}
