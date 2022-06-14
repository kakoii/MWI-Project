let array1 = ["Matt Johnson", "Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"]
array2 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm", "Jordan Heigle", "Tyler Viles"]

let set = new Set([...array1, ...array2]);

let newArray = [...set];

console.log(newArray)
