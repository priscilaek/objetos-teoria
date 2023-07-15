console.log("hola mundo")

const data = {
  name: "Juan",
  "real age": 25,
  country: "MX",
  "favorite food": "tacos",
  "favorite food categories": {
    mexican: "tacos",
    italian: "pasta"
  },
  screens: ["lg", "hp"]
}

// OBJETOS

// 1. DOT NOTATION
console.log(data.name) // "Juan"

// 2. BRACKET NOTATION
console.log(data["real age"])
console.log(data["favorite food"])

// MIX
console.log(
  "acceder por bracket notation",
  data["favorite food categories"].mexican
)
console.log(
  "acceder por bracket notation",
  data["favorite food categories"].italian
)

console.log(data["favorite food categories"]["mexican"])
console.log(data["favorite food categories"]["italian"])

// ARREGLOS
console.log(data.screens[0])
console.log(data.screens[1])
