const people=[
    {age:46 ,name:'roger'},
    {age:49 ,name:'roger'},
    {age:30 ,name:'roger'},
    {age:50 ,name:'roger'}
]
var oderPeople= function(people){
    return people.sort((a,b)=>{
        return a.age-b.age;
    })
}