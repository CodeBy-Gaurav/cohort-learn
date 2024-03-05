const details = {

    personName : "Gaurav",
    age : 21,
    gender : "male"
};
console.log(details)
console.log(details["personName"])
console.log(details["age"])

//ARRAY OF OBJECTS

const personData =[{
    personName : "ankit",
    age : 23,
    gender : "male"

},{
    personName : "sohail",
    age :24,
    gender : "male"
},{
    personName : "rani",
    age : 22,
    gender : "female"
}]
console.log(personData[1]["personName"])

for(let i = 0; i<= personData.length;i++){
    if(personData[i]["gender"]=="male"){
        console.log(personData[i]["personName"])
    }
}