const fs = require("fs");

let myData = [];

//* Create file will create a file with specific name
const createFile = () => {
  let data = JSON.stringify(myData);
  fs.writeFile("data.json", data, (err) => {
    // console.log("json file is created");
  });
};

//regex to check date of birth
const checkDateofBirth = (str) => {
  const format =
    /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
  return format.test(str);
};

//add record function will add records in file
let index = 1;
const addRecord = (firstName, lastName, age, dob, department) => {
  let userDataObject = {
    fname: firstName,
    lname: lastName,
    department: department,
    key: index,
  };

  if (!isNaN(age)) {
    userDataObject.age = age; // adding age property in object
  // } else {
  //   console.log("invalid age"); // error
  // }

  if (checkDateofBirth(dob)) {
    userDataObject.dob = dob; // adding DOB property in object
  } else {
    console.log("invalid dob format"); //error
  }

  myData.push(userDataObject);
  index++;
};

addRecord("akshay", "kumar", 15, "13/10/2000", "sales");
addRecord("ajay", "kumar", 15, "13/10/2000", "sales");
createFile();
// console.log("my data===>", myData);

//update function will update records
// const config = require("./data.json");

// const updateRecord = (index) => {
//   let read = fs.readFile("data.json", "utf-8", (err, data) => {
//     console.log(data);
//   });
//   const parseData = JSON.parse(read);
//   parseData.fname = "rakesh";

//   fs.writeFile("data.json", JSON.stringify(parseData), (err) => {
//     console.log(JSON.stringify(file));
//     console.log("writing to " + fileName);
//   });
// };
// updateRecord();


//delete fucntion will delete file from records

const deleteRecord = ()=>{

  fs.readFile('data.json')



}
