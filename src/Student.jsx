import React from "react";
import propTypes from "prop-types"
//component Student passing the props
// function Student(props){
//     return(
//         <>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>student: {props.isStudent ? "Yes" : "No"}</p>
//         </>
//     );
// }

function Student({name="Guest",age=20,isStudent=false}){
    return(
        <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>student: {isStudent ? "Yes" : "No"}</p><hr />
        </>
    );
}

//doesnot affect the running of code but shows warning in console if desired datatype is not provided
Student.propTypes= {
    name: propTypes.string,
    age:propTypes.number,
    student:propTypes.bool
}

//going to be removed in future release
// Student.defaultProps={
//     name:"Guest",
//     age:"N/A",
//     isStudent:"Yes"
// }
export default Student;