import Team from "./main"

test("Проверяем добавление персонажа в команду", () => {
  const team = new Team();
  const batmen = {
    name: "Batmen",
    age: 35
  }
  team.add(batmen)
  const correct = new Set([{ name: 'Batmen', age: 35 }])
  expect(team.members).toEqual(correct)
});

test("Проверяем добавление существующего персонажа в команду", () => {
  const team = new Team();
  const batmen = {
    name: "Batmen",
    age: 35
  }
  team.add(batmen)
  expect(() => {team.add(batmen)}).toThrow("Нельзя добавить персонажа, который уже в команде!")
});

test("Проверяем добавление всех персонажей в команду", () => {
  const team = new Team();
  const batmen = {
    name: "Batmen",
    age: 35
  }
  const fire = {
    name: "Fire",
    age: 40
  }
  team.addAll(batmen, fire)
  const correct = new Set([{ name: 'Batmen', age: 35 }, {name: "Fire", age: 40}])
  expect(team.members).toEqual(correct)
});

test("Проверяем конвертацию Set в массив", () => {
  const team = new Team();
  const batmen = {
    name: "Batmen",
    age: 35
  }
  const fire = {
    name: "Fire",
    age: 40
  }
  team.addAll(batmen, fire)
  const result = team.toArray()
  const correct = [{ name: 'Batmen', age: 35 }, {name: "Fire", age: 40}]
  expect(result).toEqual(correct)
});