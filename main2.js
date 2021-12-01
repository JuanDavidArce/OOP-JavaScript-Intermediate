// const obj1 = {
//     a:'a',
//     b:'b',
//     c: {
//         d:'d',
//         e:'e',
//     }
// }

// const sringifiedComplexObje= JSON.stringify(obj1) //Funciona simpre y cuando no usemos metodos
// const obj2 = JSON.parse(sringifiedComplexObje)

function recursiva(numbersArray)
{
    if(numbersArray.length !=0)
    {
        const firstNum=numbersArray[0];
        console.log(firstNum)
        numbersArray.shift(); //Elimina el primer elemento del array
        return recursiva(numbersArray);
    }
    
}

const numeritos=[0,1,2,3,4,5,6,7,8,9]
recursiva(numeritos)
// let num=0

// for(let index=0;index<numeritos.length;index++)
// {   
//     var numerito = numeritos[index];
//     console.log({index,numerito});
// }