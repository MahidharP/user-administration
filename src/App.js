import React from 'react'
import { Link, Route } from 'react-router-dom'
import AdminDashboard from './AdminDashboard';
import UserForm from './UserForm'

const App = () => {

  return (

    <div>
      <h2 className="welcome"> Welcome to Admin Dashboard </h2>
      <Link to="/"> Home </Link> | <Link to="/form"> User Form </Link>
      <Route path="/form" component={UserForm} />
      <Route path="/" component={AdminDashboard} exact={true} />

    </div>
  )
}

export default App;
