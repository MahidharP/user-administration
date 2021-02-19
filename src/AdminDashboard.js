import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Button } from '../node_modules/@material-ui/core';
import ShowUsersFilter from './ShowUsersFilter';

const AdminDashboard = (props) => {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const result = response.data
                setUsers(result)
                console.log(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])


    const showFullStackDev = () => {
        const result = users.filter((user) => {
            return user.jobTitle === 'FULL Stack Developer'
        })
        setFilter(result)
    }

    const showFrontEndDev = () => {
        const result = users.filter((user) => {
            return user.jobTitle === 'Front-End Developer'
        })
        setFilter(result)
    }

    const showBackEndDev = () => {
        const result = users.filter((user) => {
            return user.jobTitle === 'Node.js Developer'
        })
        setFilter(result)
    }

    const showMEANDev = () => {
        const result = users.filter((user) => {
            return user.jobTitle === 'MEAN Stack Developer'
        })
        setFilter(result)
    }

    return (

        <Container>
            <Button onClick={showFullStackDev}> Full Stack Developer </Button>
            <Button onClick={showFrontEndDev}> Fron End Developer </Button>
            <Button onClick={showBackEndDev}> NodeJS Developer </Button>
            <Button onClick={showMEANDev}> MEAN Stack Developer </Button>
            {filter.length === 0 ? '' : <ShowUsersFilter filter={filter} />}
        </Container>
    )
}

export default AdminDashboard