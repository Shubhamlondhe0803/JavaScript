//const tinderUser = new Object()  // It is a Single tern object
const tinderUser = {} // It is a non Single tern object

tinderUser.id = "123abc"
tinderUser.name = "Shubham"
tinderUser.isLoggedIn = false
    // console.log(tinderUser);

const regularUser = {

        email: "Some@gmail.com",
        fullname: {
            Userfullname: {
                firstname: "Shubham",
                lastname: "Londhe"

            }
        }
    }
    //console.log(regularUser.fullname);


const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "e", 5: "d", 6: "f" }

//const obj3 = { obj1, obj2 }
////const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);


//Spread objects

const obj3 = {...obj1, ...obj2 }
    //console.log(obj3); // Mostly used written type..

//users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));




//----------------De-Structor--------------------
const course = {
        coursename: "Core java",
        price: "2000",
        courseInstructor: "mam"
    }
    //course.courseInstructor
const { courseInstructor: Instructor } = course
console.log(Instructor);
//De-Structor means you can modify that value or term in any case.