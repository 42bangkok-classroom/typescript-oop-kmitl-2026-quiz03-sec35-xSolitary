export class Student {
  firstname: string
  lastname: string

  constructor() {
    this.firstname = ""
    this.lastname = ""
  }

  printName(){
    console.log(`${this.firstname} ${this.lastname}`)
  }
}
