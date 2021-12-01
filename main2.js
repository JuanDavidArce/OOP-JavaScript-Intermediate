const obj1 = {
    a:'a',
    b:'b',
    c: {
        d:'d',
        e:'e',
    }
}

const obj2= {};

for (prop in obj1)
{
    obj2[prop]=obj1[prop];
}

const obj3 = Object.assign({},obj1);
const obj3 = Object.create(obj1); // No apunta a la misma direccion de memoria
