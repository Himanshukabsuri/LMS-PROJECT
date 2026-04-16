import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import LoginLoading from './pages/LoginLoading'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginLoading/>} />
      <Route path='/login/admin' element={<LoginForm role="admin" title="Admin Portal" subtitle = "Sign in to manage the organization."/>} />
      <Route path='/login/user' element={<LoginForm role="user" title="User Portal" subtitle = "Sign in to access the account."/>} />
    </Routes>
    </>
  )
}

export default App
