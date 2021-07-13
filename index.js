// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveDriver(name) {
    drivers.pop(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.splice(-1)
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

function appendDriver(name) {
    let newArray = drivers.concat(name)
    return newArray
}

function prependDriver(name) {
    let newArray = [name, ...drivers]
    return newArray
}

function removeLastDriver(name) {
    return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver(name) {
    return drivers.slice(1)
}