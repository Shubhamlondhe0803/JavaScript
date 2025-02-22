const name = "Shuabhm"
    // we can the string using single and double cot("")('')....
repoCount = 34;

//console.log(name + repoCount + "Value")// its a old version to declare the strings...

console.log(`Hello my name is ${name}, The repoCount is ${repoCount}`); //It is a new version to declare the String...

const gameName = new String('Shree'); // It is a method where we will create an object.

console.log(gameName); // it will print the String and defined value 

console.log(gameName[0]) // it will print the value which are stored at index 0.

console.log(gameName.length); //Show the length

console.log(gameName.charAt(3)); // charAt are Used to see or search the positiono of any object just insert the index no.

console.log(gameName.indexOf('e')); // it will show the index of any variable...

const newString = gameName.substring(0, 4)
console.log(newString); // it will give the output according to starting and ending points

const anotherString = gameName.slice(-8, 5)
console.log(anotherString); // IT will also give the output but we can also put negative values...

const newStringOne = "   Shubham   "
console.log(newStringOne)
console.log(newStringOne.trim()); //mTrim will delete or unnecessary part from the program or output...

const url = "https://shubham.com/shubham%20londhe"

console.log(url.replace('%20', '-')); //With the help of replace we can replace the related info.