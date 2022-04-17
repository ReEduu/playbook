const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
//1
console.log("Ejercicio 1")
explorers.forEach(explorer => console.log(explorer.name))
//2
console.log("Ejercicio 2")
explorers.forEach(explorer => console.log(explorer.stack))
//3
console.log("Ejercicio 3")
const explorersStacks = explorers.map(explorer => explorer.stack)
console.log(explorersStacks)
//4
console.log("Ejercicio 4")
const explorersJS = explorers.filter((explorer) =>
  explorer.stack.includes('js')
)
console.log(explorersJS)
//5
console.log("Ejercicio 5")
const explorerCDMX = explorers.find((explorer) => explorer.city ==='CDMX')
console.log(explorerCDMX)
//6
console.log("Ejercicio 6")
const total_exercises_completed = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(total_exercises_completed)
//7
console.log("Ejercicio 7")
const areSomeExercisesFinished = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log("Alguien tiene los ejrcicios frontend terminados: "+areSomeExercisesFinished)
//8
console.log("Ejercicio 8")
const areAllExercisesFinished = explorers.every((explorer) =>  explorer.missions.onboarding.isFinished === true)
console.log("Todos terminaron el onboarding: "+areAllExercisesFinished)