// Array Travsersing

let data = [22,34,66,88,0,12,65,89,98];

// for(let i = 0 ; i < data.length ; i++){
//     document.write(data[i] + " ");

// }

function getValue(){
    let value = document.getElementById("element").value;
   
    if(value>data.length){
        alert(" Please enter the valid  ");
    }
     else{
        document.write(data[value]);
     }
    // alert(value);
    console.log(value);
}


