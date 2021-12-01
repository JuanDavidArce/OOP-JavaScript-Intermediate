const juan = 
{
    name:'juanito',
    age:18,
    aproprvedCourses : ['curso 1'],

    addCurse(newCourse)
    {
        this.aproprvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));


// Object.defineProperty(juan,'Navigator',{
//     value:'Chrome',
//     enumerable:false,
//     writable:true,
//     configurable:true
    
// })

// Object.defineProperty(juan,'Editor',{
//     value:'VsCode',
//     enumerable:true,
//     writable:false,
//     configurable:true
    
// })

// Object.defineProperty(juan,'Prueba Nasa',{
//     value:'Extraterrestres',
//     enumerable:false,
//     writable:false,
//     configurable:false
    
// })

// Object.defineProperty(juan,'Terminal',{
//     value:'WSL',
//     enumerable:true,
//     writable:true,
//     configurable:false
    
// })
Object.seal(juan);
Object.freeze(juan);


console.log(Object.getOwnPropertyDescriptors(juan));