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



function hero(bullets, dragons) {
    if (bullets >= (dragons * 2)) {
        return true
    } else {
        return false
    }
}


function squareDigits(num) {
    return +(String(num).split('').map((elem) => elem * elem).join(''))
}
console.log(squareDigits(3212)) //9414);



function vaporcode(string) {
    let array = String(string.toUpperCase().split(''));
    return array.replace(/[^a-zа-яё0-9\s]/gi, ' ').replace(/\s+/g, '  ');

}
console.log(vaporcode("Lets go to the movies")) //"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S")



function modifyMultiply(str, loc, num) {
    let res = str.split(' ')
    let ress = res[loc] + '-'
    let result = ress.repeat(num).slice(0, -1)
    return result
}
console.log(modifyMultiply("This is a string", 3, 5)) //"string-string-string-string-string"



function fakeBin(x) {
    return x.split('').map(elem => elem < 5 ? 0 : 1).join('')
}
console.log(fakeBin('45385593107843568'))



function countBy(x, n) {
    let z = [];
    for (let i = x; i <= n; i++) {
        z.push(x * i)
    }

    return z;
}

console.log(countBy(1, 10)) // [1,2,3,4,5,6,7,8,9,10])
console.log(countBy(2, 5))




function divisibleBy(numbers, divisor) {
    let result = []
    for (let elem of numbers) {
        if (elem % divisor === 0) {
            result.push(elem)
        }
    }
    return result
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));



function between(a, b) {
    let result = []
    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    return result
}
console.log(between(1, 4)) // [1, 2, 3, 4]



function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')

}

console.log(solution('camelCasing')) //'camel Casing',)