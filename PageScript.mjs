const element = [4,3,0,12,6,9,10,11,23,12,7,2,14,1,16,1,-3,7-8,19,21,-14,5,15]
let count = 0
export {
     element,
     count
}

function linerSearch(array, item){
     for (let i = 0; i < array.length; i++) {
          // count += 1 
          if(array[i] === item){
               return i
          }
          
     }
     return null
}


const binarySearch = (array, item) =>{
     let start= 0
     let end = array.length
     let middle;
     let position = -1
     let found = false
     while(found === false && start <= end){
          middle = Math.floor((start + end) / 2)
          // count += 1
          if(array[middle] === item){
               found = true
               position = middle
               return position
          }
          if(item < array[middle]){
               end = middle - 1
          } else {
               start = middle + 1
          }
     }
     return position
}

const selectionSort = array => {
     for (let i = 0; i < array.length; i++) {
          let indexedMin = i;
          for (let j = i+1; j < array.length; j++) {
              if (array[j] < array[indexedMin]) {
               indexedMin = j               
              }
                count += 1
          }
          let tmp = array[i]
          array[i] = array[indexedMin]
          array[indexedMin] = tmp 
     }
     return array
} 

//Quick Sort 

const quickSort = array => {
     if(array.length <= 1){
          return array
     }
     let pivotIndex = Math.floor(array.length / 2)
     let pivot = array[pivotIndex]
     let less = []
     let greater = []
     for (let i = 0; i < array.length; i++) {
           count +=1
          if (i === pivotIndex)
               continue
          if (array[i] < pivot) {
               less.push(array[i])
          } else{
               greater.push(array[i])
          }
     }
     return [...quickSort(less), pivot, ... quickSort(greater)]
}

console.log(selectionSort(element))
console.log(count)

export default selectionSort

// Search horizontally
const graph = {
     I:['Abduqodir', 'Rahmatillo', 'Ibrohimjon'],
     Abduqodir:['Bekzodbek', 'Muhammadior'],
     Muhammadior:['Umudjon'],
     Bekzodbek:['Muhammadior'],
     Rahmatillo:['Marcin'],
     Marcin:['Muhammadior'],
     Ibrohimjon:['']
}
//push shift
const isRommate = name => name === 'Umi'
const addDeque = (members, deque) =>{
     for (let i = 0; i < members.length; i++) {
          deque.push(members[i])
          
     }
}
const Search = name =>{
     const visited = [];
     const deque = []
     addDeque(graph['I'], deque);
     while (deque.length > 0) {
          const person = deque[0];
          deque.shift();
          if (!visited.includes(person)) {
               visited.push(person)
               if (isRommate(person)) {
                    console.log(person)
                    return true
               }
               addDeque(graph[person],deque)
          }
     }
     return false
}

//recursiveBinarySearch
const recursiveBinarySearch = (array, num,start, end) =>{
     let middle = ((start + end) / 2)
     if (num === array[middle]) {
          return middle
     }
     if (num < array[middle]){
          return recursiveBinarySearch(array, num, 0, middle -1)
     }else{
          return recursiveBinarySearch(array, num, middle + 1, end)
     }
}
console.log(recursiveBinarySearch(array, 12, 0, array.length))

//Recursive Binary Search 2
const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function recursiveBinarySearch2(array, nums){
     if (!array.length)
     return -1
     let middle = Math.floor(array.length-1 / 2)

     if (nums === array[middle]) {
          return middle
     }
     if (nums > array[middle]) {
          return recursiveBinarySearch2(array.slice(middle + 1), nums)
     }
     if (nums < array[middle]) {
          return recursiveBinarySearch2(array.slice(0,middle), nums)
     }
}
console.log(recursiveBinarySearch2(array,0))

//Search horizontally2
const graph2 = {}
graph2.a = ['b', 'c']
graph2.b = ['f']
graph2.c = ['d', 'e']
graph2.d = ['f']
graph2.e = ['f']
graph2.f = ['g']

function breadSearch(graph, start, end){
     let queue = []
     queue.push(start)
     while (queue.length > 0) {
          const current = queue.shift()
          if (!graph2[current]) {
               graph2[current] = []
          }
          if (graph[current].includes(end)) {
               return true
          }else{
               queue = [...queue, ...graph2[current]]
          }
     }
}
console.log(breadSearch(graph2, 'a', 'g'))

// algorithms of dexter
const graph3 = {
}
graph3.start = {b:10}
graph3.b = {c:20}
graph3.c = {finish:30, d:1}
graph3.d = {d:1,}
graph3.finish = {}

function shortPath(graph, start, end) {
    const costs = {}
    const process = []
    let neighbors = {}
    Object.keys(graph).forEach(node =>{
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 10000000        }
    })
    let node = findNodeLowestCost(costs, process)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        process.push(node)
        node = findNodeLowestCost(costs, process)
    }
    return costs
}

function findNodeLowestCost(costs, process) {
    let lowestCost = 10000000
    let lowestNode;
    Object.keys(costs).forEach(node =>{
        let cost = costs[node]
        if (cost < lowestCost && !process.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(graph, 'start', 'finish'))