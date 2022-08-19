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