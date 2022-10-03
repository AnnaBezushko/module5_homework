let myMap = new Map ();
myMap.set('first', '1')
myMap.set('second', '2')
myMap.set('third', '3')

for (let myKey of myMap.keys()){
  console.log (`Ключ — ${myKey}, значение — ${myMap.get(myKey)}`)
}   