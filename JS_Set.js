let set = new Set()

//add
set.add(12)
set.add(12)
set.add(11)
set.add(13)
set.add(12)
set.add(13)
//no duplicates are allowed
set.forEach(val=>console.log(val))
console.log('--After Delete--')
//delete
set.delete(13)
set.forEach(val=>console.log(val))
console.log(set.has(12))