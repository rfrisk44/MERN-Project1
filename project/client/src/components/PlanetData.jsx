// makes random planet colors and sizes
const random = (a,b) => a + Math.random() * b
const randomInt = (a,b) => Math.floor(random(a,b))
const randomColor = () => `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;


const planetData = []
const totalPlanets = 6

for(let i = 0; i<totalPlanets; i++){
    planetData.push({
        id:i,
        color: randomColor(),
        xRadius: (i + 1.5) *4,
        zRadius: (i + 1.5) * 2,
        size: random(0.5,1),
        speed: random(0.5,0.2),
        year: 2018 + i
    })
}

// function removePlanet(){
//     console.log(planetData)
//     planetData.pop()
//     console.log(planetData)
// }
export default planetData