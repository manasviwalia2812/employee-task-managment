import React, { useEffect, useState, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import {getLocalStorage} from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const[user,setUser] = useState(null);
  const[loggedInUserData,setLoggedInUserData]=useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if(loggedInUser){
  //       setUser(JSON.parse(loggedInUser).role)
  //     }
  //   }
  // },[authData])

  const handleLogin = (email,password) => {
    if(email=='user@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } 
    else if(authData ){
      const employee =authData.employees.find((e)=>email==e.email && password==e.password)

      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
      
    }
     else{
      alert('Invalid credentials')
    }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> :''}
    {user === 'admin' ? <AdminDashboard /> : ''}
    {user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : ''}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App
