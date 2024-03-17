// let today = new Date().getTime()
// let birthDate = new Date("July 6 2004").getTime()
// console.log(birthDate)
// const remainingMiliseconds = today - birthDate
// console.log(remainingMiliseconds / 1000 / 60 / 60 /24 / 7 /4/ 12 )



// var today = new Date().getFullYear()
// // console.log(today)
// var date = today - 2004
// console.log(date)





let input = document.querySelector("input")
let h3 = document.querySelector("h3")
function date() {
    let string = (input.value).substr(0, 4)
    let year = new Date().getFullYear()
    let age = year - string
    h3.innerHTML = `You are ${age} years old`
}