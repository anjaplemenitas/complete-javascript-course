// Remember, we're gonna use strict mode in all scripts now!
'use strict'

// practice challenge

const temperatures = [-3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const tempAmplitude = function (array) {
  const onlyNumbers = array.filter((element) => typeof element === 'number')
  //   console.log(onlyNumbers) // testing result
  const maxNumber = Math.max.apply(null, onlyNumbers)
  const minNumber = Math.min.apply(null, onlyNumbers)
  //   console.log(maxNumber, minNumber) // getting min, max number
  console.log(maxNumber - minNumber)
}

tempAmplitude(temperatures)

// Coding Challenge #1

const temperatures = [17, 21, 23]

const printForecast = function (temperatures) {
  temperatures.forEach((temperature) => {
    console.log(
      `${temperature}°C in ${temperatures.indexOf(temperature) + 1} days`,
    )
  })
  // outcome: "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
}
printForecast(temperatures)
