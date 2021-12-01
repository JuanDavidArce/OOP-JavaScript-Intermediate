const obj1 = {
    a:'a',
    b:'b',
    c: {
        d:'d',
        e:'e',
    }
}

const sringifiedComplexObje= JSON.stringify(obj1) //Funciona simpre y cuando no usemos metodos
const obj2 = JSON.parse(sringifiedComplexObje)
