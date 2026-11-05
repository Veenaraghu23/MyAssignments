////********checking for Var******///////////
const browser = "Chrome";

function getBrowserVersion() {


    if (browser === "Chrome") {
        var browserVersion = "Chrome Version 117";
    }

    console.log(browserVersion); //var is function-scoped, not block-scoped.
}

getBrowserVersion();


////*********checking for let*******////
const browser1 = "Chrome";

function getBrowserVersion1() {


    if (browser1 === "Chrome") {
        let browser1 = "Chrome Version 117";
        //console.log(browserVersion1);
    }

     console.log(browser1);//let is block-scoped., ReferenceError: browserVersion1 is not defined
}

getBrowserVersion1();