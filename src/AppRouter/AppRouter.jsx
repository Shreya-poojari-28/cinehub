import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import Dashboard from '../Components/Dashboard/Dashboard'
import MovieListPage from '../Components/MovieListPage/MovieListPage '

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoutes />}>
          <Route index element={<Login />} />
        </Route>
        <Route path='/dashboard' element={<PrivateRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route  path="/movies/:type" element={<PrivateRoutes />}>
          <Route index element={<MovieListPage  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter