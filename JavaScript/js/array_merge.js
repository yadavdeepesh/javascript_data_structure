let data = [23,45,67,32,12];
console.log(data);

let data2 = [34,56,7,8,90,56];
console.log(data2);
let data3 = [...data,...data2];// merge two array using default function 
// console.log(data3);
let datamerge = [];
console.log("+++++++++++++++++merge array data+++++++++");
for(let i = 0 ; i < data.length ; i++){
  datamerge[i]  = data[i];
}
console.log(datamerge);
console.log(data.length);
for(let i = 0 ; i< data2.length ;i++){
    datamerge[data.length+i] = data2[i];
}

console.log("+++++++++++++++++merge array data ,data2 in datamerge array +++++++++")
console.log(datamerge);
