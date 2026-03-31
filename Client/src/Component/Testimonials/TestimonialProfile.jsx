import React from "react"
import { useParams } from "react-router-dom"
import "./TestimonialProfile.css"

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

function TestimonialProfile(){

const { id } = useParams()

const students = {

1:{
name:"Madhulika Rao",
image:user_1,
course:"B.Tech Computer Science",
year:"3rd Year",
skills:["React","Node.js","Machine Learning"],
achievement:"Winner of National Hackathon 2025",
about:"I joined ScholarsHub to improve my technical skills and it helped me grow as a developer. The faculty and environment are amazing.",
email:"madhulika@gmail.com"
},

2:{
name:"Harsh Tiwari",
image:user_2,
course:"B.Tech Information Technology",
year:"4th Year",
skills:["Cloud Computing","AWS","DevOps"],
achievement:"Intern at Microsoft",
about:"ScholarsHub gave me great exposure to industry projects and helped me land my dream internship.",
email:"rahul@gmail.com"
},

3:{
name:"Vaishali Singh",
image:user_3,
course:"M.Tech Artificial Intelligence",
year:"2nd Year",
skills:["Deep Learning","Python","Data Science"],
achievement:"Published 3 research papers",
about:"The research facilities and mentorship here are incredible.",
email:"vaishali@gmail.com"
},

4:{
name:"Williams",
image:user_4,
course:"PhD Data Science",
year:"Research Scholar",
skills:["Big Data","AI","Statistics"],
achievement:"International AI Research Award",
about:"Working with top researchers and access to advanced labs makes this university special.",
email:"williams@gmail.com"
}

}

const student = students[id]

return(

<div className="profile-page">

<div className="profile-card">

<img src={student.image} alt="" className="profile-img"/>

<h1>{student.name}</h1>

<h3>{student.course}</h3>

<p className="year">{student.year}</p>

<div className="skills">

<h4>Skills</h4>

<ul>
{student.skills.map((skill,index)=>(
<li key={index}>{skill}</li>
))}
</ul>

</div>

<div className="achievement">

<h4>Achievement</h4>

<p>{student.achievement}</p>

</div>

<div className="about-them">

<h4>Student Experience</h4>

<p>{student.about}</p>

</div>

{/* <button className="contact-btn">Contact</button> */}

</div>

</div>

)

}

export default TestimonialProfile