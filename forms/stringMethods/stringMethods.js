let quoteString = ('Failure is simply the opportunity to begin again this time more intelligently.'); 
alert(quoteString); 

//Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString. Use this format for your output:
//Upper case string is: XXXXX

let upperCaseString = quoteString.toUpperCase();
alert(`Upper case string is '${upperCaseString}'`); 

//Create a new variable named authorString and put this text in it. 
//"- Henry Ford"

let authorString = ('- Henry Ford');
alert(authorString);                  

//Then create a new variable completeString that holds a new string created by using a string method to put the string in authorString on the end of the string in quoteString. Use this format for your output:
//The string in quoteString is:  XXXXXXX

let completeString = (quoteString.concat(authorString));
alert(`The string in quoteString is: ${completeString}`);

//Now create a new string variable named secondQuote and put this string in it: 
//"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

let secondQuote = ('Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King');
alert(secondQuote);

//Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString. Use this format for your output:
//Lower case string is: XXXXX

let lowerCaseString = (secondQuote.toLowerCase());
alert(`Lower case string is: ${lowerCaseString}`);

//Find the character at the 3rd position of secondQuote using a string method. Use this format for your output:
//The character at location 3 is XXXX

var positionThree = secondQuote;
const index = 3;
alert('The character at location 3 is ' + positionThree.charAt(index));

//Create a new variable named findString. Using a string method, remove this string:
//"What separates the talented individual from the successful one is a lot of hard work. "
//from the string secondQuote is holding and put it in the findString variable. Output the string in secondQuote.
//Note: Don't use any hard-coding (that is writing the string directly in findString).

let findString = secondQuote.split('. ');
var remove = findString.splice(1,1);
alert(findString);

let findString2 = secondQuote.replace("What separates the talented individual from the successful one is a lot of hard work.","")
alert(findString2);
