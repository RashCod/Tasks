function nameShuffler(str) {
    return str.split(' ').reverse('').join(' ')
}


function isIsogram(str) {
    let arr = str.toUpperCase().split('')
    return new Set(arr).size == arr.length;
}