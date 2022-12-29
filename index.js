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
  }
};

addRecord("akshay", "kumar", 15, "13/10/2000", "sales");
addRecord("ajay", "kumar", 15, "13/10/2000", "sales");
addRecord("ajay", "kumar", 15, "13/10/2000", "sales");
createFile();
// console.log("my data===>", myData);

//update function will update records

const updateRecord = (index, updateData) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    const pardata = JSON.parse(data);
    pardata[index] = updateData;

    fs.writeFile("data.json", JSON.stringify(pardata), (err) => {
      if (err) console.log(err);
    });
  });
};
updateRecord(3, {
  fname: "ajay",
  lname: "Sharma",
  age: 22,
  dob: "30/12/2000",
  department: "IT",
});

//delete fucntion will delete file from records

// const deleteRecord = ()=>{

//   fs.readFile('data.json' , )

// }
