import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import LoginLoading from './pages/LoginLoading'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginLoading/>} />
      <Route path='/login/admin' element={<LoginForm role="librarian" title="Admin Portal" subtitle = "Sign in to manage the organization."/>} />
      <Route path='/login/user' element={<LoginForm role="student" title="User Portal" subtitle = "Sign in to access the account."/>} />

      <Route   element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>} />

      </Route>
    </Routes>
    </>
  )
}

export default App
