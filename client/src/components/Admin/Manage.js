import React, { useState, useEffect } from 'react'
import { InputGroup, Top, Label, Input, Textarea, Button, StatusText, SignOutButton, SignOutIcon } from './styled'
import { db, auth } from '../../firebase'

const emptyState = [
  {
    id: '',
    name: '',
    desc: ''
  },
  {
    id: '',
    name: '',
    desc: ''
  },
  {
    id: '',
    name: '',
    desc: ''
  },
  {
    id: '',
    name: '',
    desc: ''
  }
]

const Manage = ({ setLoading }) => {
  const [lunches, setLunches] = useState(emptyState)
  const [validation, setValidation] = useState(false)
  const [status, setStatus] = useState(undefined)

  useEffect(() => {
    setLoading(true)

    db.collection('lunches').get().then(querySnapshot => {
      setLunches(querySnapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id })))
      setLoading(false)
    }).catch(error => console.error(error))
  }, [])

  useEffect(() => {
    if (status) {
      setTimeout(() => setStatus(undefined), 5000)
    }
  }, [status])

  const validate = () => {
    const newValidation = lunches.map(({ name, desc }) => ({ name: name.length > 0, desc: desc.length > 0 }))
    setValidation(newValidation)

    return !newValidation.some(({ name, desc }) => !name || !desc)
  }

  const onChange = (idx, key, value) => {
    const newLunches = [...lunches]
    newLunches[idx][key] = value
    setLunches(newLunches)

    if (validation) {
      validate()
    }
  }

  const update = () => {
    if (!validate()) {
      return
    }

    setLoading(true)

    lunches.forEach(async ({ id, name, desc }, i) => {
      await db.collection('lunches').doc(id).update({ name, desc }).then(() => {
        if (i + 1 === lunches.length) {
          setStatus('success')
          setLoading(false)
        }
      })
        .catch(error => {
          console.error(error)
          setStatus('error')
          setLoading(false)
        })
    })
  }

  const logout = () => {
    auth.signOut()
  }

  return (
    <>
      <Top flexEnd>
        <SignOutButton onClick={logout} title="Logga ut">
          <SignOutIcon className="fas fa-sign-out-alt" />
        </SignOutButton>
      </Top>
      {
        lunches.map(({ name, desc }, i) => (
          <InputGroup key={i}>
            <Top>
              <Label>{i + 1}.</Label>
              <Input
                value={name}
                onChange={e => onChange(i, 'name', e.target.value)}
                placeholder="Rubrik"
                error={validation && !validation[i].name}
              />
            </Top>
            <Textarea
              rows="5"
              value={desc}
              onChange={e => onChange(i, 'desc', e.target.value)}
              placeholder="Beskrivning..."
              error={validation && !validation[i].desc}
            />
          </InputGroup>
        ))
      }
      {
        status && <StatusText status={status}>{status === 'success' ? 'Ändringarna är sparade!' : 'Någonting gick fel!'}</StatusText>
      }
      <Button onClick={update}>Uppdatera</Button>
    </>
  )
}

export default Manage