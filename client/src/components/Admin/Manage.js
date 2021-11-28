import React, { useState, useEffect } from 'react'
import { InputGroup, Top, Left, Right, Label, Input, Textarea, Button, StatusText, SwitchButton, SignOutButton, SignOutIcon, SwitchButtons } from './styled'
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
  const [city, setCity] = useState(emptyState)
  // const [lunches, setLunches] = useState(emptyState)
  // const [validation, setValidation] = useState(false)
  const [status, setStatus] = useState(undefined)
  const [selectedCity, setSelectedCity] = useState('malmo')

  useEffect(() => {
    setLoading(true)

    db.collection(selectedCity).get().then(querySnapshot => {
      setCity(querySnapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id })))
      setLoading(false)
    }).catch(error => console.error(error))
  }, [selectedCity])

  useEffect(() => {
    if (status) {
      setTimeout(() => setStatus(undefined), 5000)
    }
  }, [status])

  const onChange = (id, key, value, lunchIdx) => {
    const newCity = [...city]

    const index = newCity.findIndex(city => city.id === id)

    if (key === 'lunches') {
      newCity[index][key][lunchIdx] = value

      setCity(newCity)

      return
    }

    newCity[index][key] = value

    setCity(newCity)
  }

  const update = () => {
    setLoading(true)

    city.forEach(async (c, i) => {
      if (selectedCity === 'malmo') {
        const { id, name, desc } = c

        await db.collection(selectedCity).doc(id).update({ name, desc }).then(() => {
          if (i + 1 === city.length) {
            setStatus('success')
            setLoading(false)
          }
        }).catch(error => {
          console.error(error)
          setStatus('error')
          setLoading(false)
        })

        return
      }

      const { id, lunches } = c

      await db.collection(selectedCity).doc(id).update({ lunches }).then(() => {
        if (i + 1 === city.length) {
          setStatus('success')
          setLoading(false)
        }
      }).catch(error => {
        console.error(error)
        setStatus('error')
        setLoading(false)
      })
    })
  }

  const logout = () => {
    auth.signOut()
  }

  const sortLund = (a, b) => {
    if (selectedCity === 'malmo') {
      return
    }

    return a.dayIndex - b.dayIndex
  }

  return (
    <>
      <Top spaceBetween>
        <SwitchButtons>
          <SwitchButton active={selectedCity === 'malmo'} onClick={() => setSelectedCity('malmo')}>Malmö</SwitchButton>
          <SwitchButton active={selectedCity === 'lund'} onClick={() => setSelectedCity('lund')}>Lund</SwitchButton>
        </SwitchButtons>
        <SignOutButton onClick={logout} title="Logga ut">
          <SignOutIcon className="fas fa-sign-out-alt" />
        </SignOutButton>
      </Top>
      {
        city.sort(sortLund).map((c, i) => {
          if (selectedCity === 'malmo') {
            const { id, name, desc } = c

            return (
              <InputGroup key={i}>
                <Top>
                  <Label>{i + 1}.</Label>
                  <Input
                    value={name}
                    onChange={e => onChange(id, 'name', e.target.value)}
                    placeholder="Rubrik"
                  />
                </Top>
                <Textarea
                  rows="3"
                  value={desc}
                  onChange={e => onChange(id, 'desc', e.target.value)}
                  placeholder="Beskrivning..."
                />
              </InputGroup>
            )
          }

          const { id, weekday, lunches = [] } = c

          return (
            <InputGroup key={i}>
              <Top>
                <Label>{weekday}</Label>
              </Top>
              {
                lunches.sort((a, b) => a.dayIndex > b.dayIndex).map((lunch, lunchIdx) => (
                  <Input
                    key={lunchIdx}
                    value={lunch}
                    onChange={e => onChange(id, 'lunches', e.target.value, lunchIdx)}
                    plachholder={`Lunch ${i + 1}...`}
                  />
                ))
              }
            </InputGroup>
          )

        })
      }
      {
        status && <StatusText status={status}>{status === 'success' ? 'Ändringarna är sparade!' : 'Någonting gick fel!'}</StatusText>
      }
      <Button onClick={update}>Uppdatera</Button>
    </>
  )
}

export default Manage