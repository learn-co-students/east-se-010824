import { useState } from 'react'
import { Box, Button, Container, TextField } from '@mui/material';
import { useFormik } from 'formik'
import * as yup from 'yup'

function Auth({ setUser }) {
    const [signup, setSignup] = useState(true)

    const signupSchema = yup.object().shape({
        username: yup.string().min(5, 'Username too Short!').max(15, 'Username too Long!'),
        password: yup.string().min(5, 'Password too Short!').max(15, 'Password too Long!'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    })
    const loginSchema = yup.object().shape({
        username: yup.string().required('username required'),
        password: yup.string().required('password required')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: signup ? signupSchema : loginSchema,
        onSubmit: (values) => {
            const endpoint = signup ? '/users' : '/login'
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then((user) => {
                        setUser(user)
                        // navigate into site
                    })
                } else { 
                    
                    console.log('errors? handle them')
                }
            })
        }
    })

    function toggleSignup() {
        setSignup((currentSignup) => !currentSignup)
    }

    return (
        <Container maxWidth='sm'>
            {/* { Object.keys(formik.errors).map((key) => <li>{formik.errors[key]}</li>) } */}
            <button onClick={toggleSignup}>{signup ? 'Login instead!' : 'Register for an account'}</button>
            <form className='form' onSubmit={formik.handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input 
                id="username" 
                name="username" 
                placeholder='Username'
                required
                value={formik.values.username}
                onChange={formik.handleChange}
            />
            
            <label htmlFor='password'>Password:</label>
            <input 
                id='password' 
                name='password' 
                type='password' 
                placeholder='Password' 
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            
                {signup && <>
                    <label htmlFor='phase'>Phase:</label>
                    <input 
                        id="passwordConfirmation" 
                        name="passwordConfirmation"
                        type='password' 
                        placeholder="Password Confirmation" 
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                    />
                </>}
                <button type="submit">Submit</button>
            </form>
        </Container>
    )
}

export default Auth;