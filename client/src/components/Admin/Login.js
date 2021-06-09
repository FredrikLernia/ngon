import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { Form, Input, InputGroup, Label, Button, StatusText } from './styled'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState()

  const login = async e => {
    e.preventDefault()
    const user = await auth.signInWithEmailAndPassword(email, password).catch(error => console.error('Fel e-post eller lösenord'))

    if (!user) {
      setStatus('error')
    }
  }

  return (
    <Form onSubmit={login}>
      <InputGroup>
        <Label login>E-post</Label>
        <Input
          value={email}
          onChange={e => { setEmail(e.target.value); setStatus() }}
          login
        />
      </InputGroup>
      <InputGroup>
        <Label login>Lösenord</Label>
        <Input
          type="password"
          value={password}
          onChange={e => { setPassword(e.target.value); setStatus() }}
          login
        />
      </InputGroup>
      {
        status && <StatusText status="error">Fel e-post eller lösenord</StatusText>
      }
      <Button>Logga in</Button>
    </Form>
  )
}

export default Login