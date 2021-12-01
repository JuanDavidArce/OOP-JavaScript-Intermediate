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

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan,"prueba de la nasa",{
    value:'Extraterrestres',
    enumerable:true,
    writable:true,
    configurable:true

})