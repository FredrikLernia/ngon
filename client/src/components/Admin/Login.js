import React, { useState } from 'react'
import { auth } from '../../firebase'
import { Input, InputGroup, Label, Button, StatusText } from './styled'

const Login = ({ setLoading }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState()

  const login = async () => {
    const user = await auth.signInWithEmailAndPassword(email, password).catch(error => console.error(error))
    
    if (!user) {
      setStatus('error')
    }
  }

  return (
    <>
      <InputGroup>
        <Label login>E-post</Label>
        <Input value={email} onChange={e => setEmail(e.target.value)} login />
      </InputGroup>
      <InputGroup>
        <Label login>Lösenord</Label>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} login />
      </InputGroup>
      {
        status && <StatusText status="error">Fel användarnamn eller lösenord</StatusText>
      }
      <Button onClick={login}>Logga in</Button>
    </>
  )
}

export default Login