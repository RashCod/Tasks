function nameShuffler(str) {
    return str.split(' ').reverse('').join(' ')
}


function isIsogram(str) {
    let arr = str.toUpperCase().split('')
    return new Set(arr).size == arr.length;
}


function findShort(s) {
    let res = s.split(' ').reduce(function (a, b) { return a.length <= b.length ? a : b })
    return res.length

}


function accum(s) {
    let res = s.split('').map((elem, i) => elem.repeat(i + 1)).map((elem) => elem.slice(0, 1).toUpperCase() + elem.slice(1).toLowerCase()).join('-')
    return res
}


function doubleChar(str) {
    return str.split('').map((elem) => elem.repeat(2)).join('')
}


function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        } if (arr[i] === 0) {
            return 0
        }
    }
    return sum
}


function invert(array) {
    return array.map((elem) => elem >= 0 ? elem * -1 : Math.abs(elem))
}


function abbrevName(name) {
    return name.match(/[A-Z]/g).join('.')

}


const maskify = (cc) => {
    let arr = cc.slice(0, cc.length - 4)
    return cc.replace(arr, '#'.repeat(cc.length - 4))

}


function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i <= limit; i += integer) {
        arr.push(i)
    }
    return arr
}


function minMax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]

}



function removeExclamationMarks(s) {
    return s.replace(/!/gi, '')
}
