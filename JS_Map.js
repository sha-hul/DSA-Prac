//Passing array to the map
let map = new Map([['name', 'Shahul'], ['age', 24], ['designation', 'SE']]);

//get the key value

console.log(map.get('name'))

//set the key,value

map.set(1, 'DSA MAP DS')

//check the key has the value

console.log(map.has(1))

//delete 
map.delete('designation')

//iterate
map.forEach((val, index) => console.log(index + ' : ' + val))

//size
console.log(map.size)

//clear

map.clear()
console.log(map.size)


//Object to map
let obj = {
    '_name': 'Shahul',
    'age': 24,
    'designation': 'SE',
    game: 'BGMI'
}
const { _name, age, designation, game } = obj;

map = new Map();

map.set('name', _name)
map.set('Age', age)
map.set('Designation', designation)
map.set('Game', game)
map.forEach((val, index) => console.log(index + ' : ' + val))
map.set('Game', 'NFS')
map.forEach((val, index) => console.log(index + ' : ' + val))

// 19
// 41 29 80 -4 29 76 47 8 6 72 84 45 41 -15 38 -52 -18 -19 18
// 11
// 38 41 84 -15 -52 6 45 8 29 29 47



function intersectionOfTwoArraysBasic() {
    debugger
    let n = 19;
    let nums1 = [, , 80, -4, , 76, , , , 72, , , 41, , , , -18, -19, 18]
    let m = 11;
    let nums2 = [38, 41, 84, -15, -52, 6, 45, 8, 29, 29, 47]
    
    38  //ok
    41 // ok
    84
    -15
    -52 
    6
    45 
    8
    29
    29
    47
    //declare the map
    let map = new Map();
    //add the key and value frequency 
    for (let i = 0; i < n; i++) {
        let value = 1;
        if (map.has(nums1[i])) {
            value = map.get(nums1[i]) + 1;
            map.set(nums1[i], value)
        }
        else {
            map.set(nums1[i], value)
        }
    }
    debugger
    //map ={1:2, 2:2}
    let resArr = [];
    for (let i = 0; i < m; i++) {
        if (map.has(nums2[i])) { //
            if (!(map.get(nums2[i])<1)) {
                resArr.push(nums2[i])
            }
            let res = map.get(nums2[i]) - 1;
            map.set(nums2[i], res)
        }
    }
    return resArr;
}

let Qmap = new Map(); 

Qmap.set('name', _name)
Qmap.set('Age', age)
Qmap.set('Designation', designation)
Qmap.set('Game', game)

console.log(Qmap)

let keys =[Qmap.keys()];
let keyset = new Set(keys);

keyset.forEach(val=>console.log(val))
console.log(keyset.has('name'))

//console.log(keyset.has('Age'))

keyset.delete('Age');

console.log(keyset.has('Age'))
keyset.forEach(val=>console.log(val))

console.log(Qmap.has('name'))
console.log(Qmap.has('Age'))