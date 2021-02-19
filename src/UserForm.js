import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value)
    }

    const handleExperienceChange = (e) => {
        setExperience(e.target.value)
    }

    const handleSkillsChange = (e) => {
        setSkills(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            email: email,
            phone: phone,
            jobTitle: jobTitle,
            experience: experience,
            skills: skills
        }

        axios.post('http://dct-application-form.herokuapp.com/users/application-form', formData)
            .then((response) => {
                const result = response.data
                console.log(result)
            })
            .catch((err) => {
                alert(err.message)
            })

        setName('')
        setEmail('')
        setPhone('')
        setJobTitle('')
        setExperience('')
        setSkills('')
        console.log(formData)
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
                <h3 className="form"> Please Fill your Details </h3>
                <Form.Group controlId="name">
                    <Form.Label> Name </Form.Label>
                    <Form.Control type="name" value={name} placeholder="Enter Name" onChange={handleNameChange} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter Email" onChange={handleEmailChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <br />

                <Form.Group>
                    <Form.Label> Phone </Form.Label>
                    <Form.Control type="text" value={phone} placeholder="Enter Mobile Number" onChange={handlePhoneChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Applying For </Form.Label>
                    <Form.Control as="select" onChange={handleJobTitleChange}>
                        <option> Select your Profession </option>
                        <option value='Front-End Developer'> Front End Developer </option>
                        <option value='Node.js Developer'> Node JS Developer </option>
                        <option value='FULL Stack Developer'> Full Stack Developer </option>
                        <option value='MEAN Stack Developer'> MEAN Stack Developer </option>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="experience">
                    <Form.Label> Experience </Form.Label>
                    <Form.Control type="experience" value={experience} placeholder="Enter Your Experience in Years" onChange={handleExperienceChange} />
                </Form.Group>

                <Form.Group controlId="technicalSkills">
                    <Form.Label>Techincal Skills</Form.Label>
                    <Form.Control as="textarea" rows={2} value={skills} placeholder="Enter your technical skills" onChange={handleSkillsChange} />
                </Form.Group>

                <Button type="submit"> Save </Button>
            </Form>
        </div>
    )
}

export default UserForm 