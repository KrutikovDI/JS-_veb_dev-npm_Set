export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(person){
    let sizeBeforeAdd = this.members.size;
    this.members.add(person);
    let sizeAfterAdd = this.members.size;
    if (sizeBeforeAdd == sizeAfterAdd) {
      throw new Error("Нельзя добавить персонажа, который уже в команде!")
    }
  }

  addAll(...person){
    for (let i of person){
      this.members.add(i);
    }
  }

  toArray(){
    let massive = [];
    for (let i of this.members){
      massive.push(i)
    }
    return massive
  }
}
