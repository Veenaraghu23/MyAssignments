function launchBrowser(browserName)
{
    if(browserName === "Chrome")
    {
      console.log("Launching the chrome browser");
      
    }
    else
    {
        console.log("Launching the other browser");
    }
}

function runTests(testType)
{
switch(testType)
{
 case "smoke":
console.log("Running Smoke Tests");
break;

 case "sanity":
console.log("Running sanity Tests");
break;

 case "regression":
console.log("Running regression Tests");
break;

default:
    console.log("Running Smoke Tests")

}
}
launchBrowser("Chrome");
runTests("regression")