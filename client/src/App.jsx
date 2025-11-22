import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Login from './page/Login'
import Signup from './page/Signup'
import Contacus from './page/Contacus'
import Landing from './page/LandingPage'
import EmailVerify from './page/EmailVerify'
import Menu from './page/Menu'
// import Oder from './page/ProfilePage'
import ProductDetails from './page/ProductDetails'
import CartPage from './components/CartPage'
import ProfilePage from './page/ProfilePage'
import SupportPage from './extra/SupportPage'
import PrivacyPage from './extra/PrivacyPage'
import TermsPage from './extra/TermsPage'
import HelpPage from './extra/HelpPage'
import OrderPage from './components/OrderPage'
import LogoutPage from './components/LogoutPage'
import ProtectedRoute from './auth/ProtectedRoute'
import PublicRoute from './auth/PublicRoute'


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Protected Routes */}
        <Routes>
          <Route path='/home' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>}>
          </Route>
          <Route path='/menu' element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }>
          </Route>
          {/* <Route path='/order' element={<Oder />}></Route> */}
          <Route path="/product/:id" element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>} />
          <Route path='/profile' element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>}>
          </Route>
          <Route path='/order' element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>}>
          </Route>
          <Route path='/logout' element={
            <ProtectedRoute>
              <LogoutPage />
            </ProtectedRoute>}>
          </Route>
        </Routes>
        {/* Public Routes */}
        <Routes>
          <Route path='/Login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }>
          </Route>
          <Route path='/signup' element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }>
          </Route>
          <Route path='/' element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }>
          </Route>
          <Route path='/verify-otp' element={
            <PublicRoute>
              <EmailVerify />
            </PublicRoute>
          }>
          </Route>
          <Route path='/faq' element={<SupportPage />}></Route>
          <Route path='/privacy' element={<PrivacyPage />}></Route>
          <Route path='/terms' element={<TermsPage />}></Route>
          <Route path='/help' element={<HelpPage />}></Route>
          <Route path='/contactus' element={<Contacus />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App