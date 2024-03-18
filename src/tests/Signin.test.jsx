/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Signin from '../pages/Signin.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'

describe('SigninPage', () => {
    test('Teste1', () => {
        render(
            <Router>
                <AuthProvider>
                    <Signin />
                </AuthProvider>                
            </Router>
        )        
        expect(screen.getByText('Signin')).toBeInTheDocument()
    })
})