export default class Employee {
  constructor(id, name, phone, title) {
    this.id = id 
    this.name = name 
    this.phone = phone 
    this.title = title 
  }
  
  updateName(n){
    this.name = n
  }

  updatePhone(n){
    this.phone = n
  }

  updateTitle(n){
    this.title = n
  }
}