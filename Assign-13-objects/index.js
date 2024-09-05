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
    // Creating multiple records
    var sibling_1 = new Siblings("Sabeela", 30, "Dentist");
    var sibling_2 = new Siblings("Safina", 28, "Montessori Directress");
    var sibling_3 = new Siblings("Anila", 26, "Software Developer");
    console.log(sibling_1);
    console.log(sibling_2);
    console.log(sibling_3);
    
