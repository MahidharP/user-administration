import React, { useState } from 'react'
import { Container } from '../node_modules/@material-ui/core';
import { Table, Button } from '../node_modules/react-bootstrap';
import Example from './Example'


const ShowUsersFilter = (props) => {
    const { filter } = props

    return (
        <Container>
            <h2> Total Applicatans for <em style={{ fontStyle: '-moz-initial' }}> {filter[1].jobTitle} </em> are {filter.length} </h2>

            <Table responsive hover>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Experience </th>
                        <th> Technical Skills </th>
                        <th>  Status </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter.map((user) => {
                            return (
                                <tr key={user._id}>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td> {user.experience} </td>
                                    <td> {user.skills} </td>
                                    <td> {user.status} </td>
                                    <td> <Example user={user} /> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container >
    )
}

export default ShowUsersFilter


/*

<td> {user.status === 'rejected' ? <Button variant="danger" onClick={() => {
    viewDetails(user)
}}> View </Button> : <Button variant="success" onClick={() => {
    viewDetails(user)
}}> View </Button>} </td>

*/