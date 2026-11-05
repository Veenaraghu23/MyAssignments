// Global variable
let genderType = "female";

function printGender() {

    // Function-scoped variable
    let color = "brown";

    if (genderType.startsWith("female")) {

        // var is function scoped
        var age = 30;

        // Block-scoped variable
        let color = "pink";

        console.log("Color inside if block: " + color);
    }

    console.log("Age outside if block: " + age);
    console.log("Color outside if block: " + color);
}

// Function call
printGender();

console.log("Global Gender Type: " + genderType);

// Change global variable
genderType = "male";

printGender();

console.log("Updated Global Gender Type: " + genderType);