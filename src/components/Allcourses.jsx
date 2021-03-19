import React, { Component, useState } from 'react';
import Course from './course'
import course from './course';

const AllCourse = ()=>{
    const [courses,setCourses] = useState([
        {title: "java course",description:"this is java course"},
        {title: "django course",description:"this is django course"}
    ]);
    
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>

            {

                courses.length > 0 ?
                courses.map( (item) => 
                    <Course course= {item} />  
                ) : "No courses"


            }


           
      </div>  
    )
};

export default AllCourse;