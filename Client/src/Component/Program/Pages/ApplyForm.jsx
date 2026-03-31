import React, { useState } from "react"
import "./ApplyForm.css"

function ApplyForm(){

const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    course:"",
    message:""
})

const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit = async (e)=>{
    e.preventDefault()

    try{
        const res = await fetch("http://localhost:5000/api/apply",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })

        const data = await res.json()

        alert("Application submitted successfully 📩 Check your email!")

    }catch(err){
        alert("Error submitting form")
    }
}

return(
<div className="form-page">

<form onSubmit={handleSubmit} className="form-card">

<h2>Apply Now</h2>

<input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
<input type="email" name="email" placeholder="Email" onChange={handleChange} required />
<input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />

<select name="course" onChange={handleChange} required>
<option value="">Select Course</option>
<option value="BTech">B.Tech</option>
<option value="MTech">M.Tech</option>
<option value="PhD">PhD</option>
</select>

<textarea name="message" placeholder="Why do you want to join?" onChange={handleChange}></textarea>

<button type="submit">Submit Application</button>

</form>

</div>
)
}

export default ApplyForm