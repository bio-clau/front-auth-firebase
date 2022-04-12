import React from 'react';
import SignUp from './SignUp'
import {Container} from 'react-bootstrap'
import Dashboard from './Dashboard'
import UpdateProfile from './UpdateProfile'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import {AuthProvider} from '../context/AuthContext'
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        
            <Container className='d-flex align-items-center justify-content-center' 
            style={{minHeight: "100vh"}}>
                <div className='w-100' style={{maxWidth: '400px'}}>
                <AuthProvider>
                    <Routes>
                        <Route exact path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        <Route exact path='/update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                        <Route exact path='/signup' element={<SignUp/>} />
                        <Route exact path='/login' element={<Login/>} />
                        <Route exact path='/forgot-password' element={<ForgotPassword/>} />
                    </Routes>
                    
                </AuthProvider>
                </div>
                
            </Container>
        
        
    )
}

export default App