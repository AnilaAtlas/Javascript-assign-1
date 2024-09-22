// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];

    var sum = 0;
    for(var key in itemsArray){
        var items = itemsArray[key]
        var itemPrice = items.price * items.quantity;
        sum += itemPrice;
        document.write(`The price of ${items.name} is Rs. ${itemPrice}<br>`); 
    }
    document.write(`The total price of all itmes is: ${sum}<br><br>`);

//  2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
    var profile ={
        name: "Anila",
        email:"anila.khan3044@gmail.com",
        password: "7890",
        age: "26",
        gender: "Female",
        city: "Karachi",
        country: "Pakistan"
    };
    console.log("age" in profile);
    console.log("country" in profile);
    console.log("firstName" in profile);
    console.log("lastName" in profile);

//  3. Create a constructor function with some properties. Now
// create multiple records using the constructor.
    function Siblings(name,age,profession){
        this.name=name;
        this.age=age;
        this.profession=profession;
    }
    var sibling_1 = new Siblings("Sabeela", 30, "Dentist");
    var sibling_2 = new Siblings("Safina", 28, "Montessori Directress");
    var sibling_3 = new Siblings("Anila", 26, "Software Developer");
    console.log(sibling_1);
    console.log(sibling_2);
    console.log(sibling_3);
    
// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:
//  use select box for education and profession,
//  use radio box for gender
// Bonus : use can use localStorage to save records.
// Constructor function for creating a population record
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
function addRecord(record) {
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(record);
    localStorage.setItem('populationRecords', JSON.stringify(records));
    displayRecords();
}

function displayRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];

    if (records.length === 0) {
        recordsList.innerHTML = '<p>No records found.</p>';
    } else {
        records.forEach((record, index) => {
            const recordDiv = document.createElement('div');
            recordDiv.classList.add('border', 'p-3', 'my-2');
            recordDiv.innerHTML = `
                <p><strong>Name:</strong> ${record.name}</p>
                <p><strong>Gender:</strong> ${record.gender}</p>
                <p><strong>Address:</strong> ${record.address}</p>
                <p><strong>Education:</strong> ${record.education}</p>
                <p><strong>Profession:</strong> ${record.profession}</p>
                <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">Delete</button>
            `;
            recordsList.appendChild(recordDiv);
        });
    }
}

function deleteRecord(index) {
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.splice(index, 1);
    localStorage.setItem('populationRecords', JSON.stringify(records));
    displayRecords();
}

document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    const newRecord = new PopulationRecord(name, gender, address, education, profession);
    addRecord(newRecord);
    this.reset();
});
displayRecords();
