import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import LoginLoading from './pages/LoginLoading'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import AddBookForm from './pages/AddBooks'
import AddBooks from './pages/AddBooks'
import AddUsers from './pages/AddUsers'

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
      <Route path='/add-books' element={<AddBooks/>} />
      <Route path='/add-users' element={<AddUsers/>} />

      </Route>
    </Routes>
    </>
  )
}

export default App
