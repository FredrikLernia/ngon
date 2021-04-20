import React, { useState, useEffect } from 'react'
import { Wrapper, Box, InputGroup, Top, Label, Input, Textarea, Button, SpinnerWrapper, Spinner } from './styled'

const emptyState = [
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  }
]

const Admin = () => {
  const [lunches, setLunches] = useState(emptyState)
  const [validation, setValidation] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2000)
    }
  }, [loading])

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
    console.log(validate())
    if (!validate()) {
      console.log(validation)
      return
    }

    setLoading(true)
  }

  console.log('render')

  return (
    <Wrapper>
      <Box>
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
        <Button onClick={update}>Uppdatera</Button>
      </Box>
      {
        loading
          ? (
            <SpinnerWrapper>
              <Spinner>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              </Spinner>
            </SpinnerWrapper>
          )
          : ''
      }
    </Wrapper>
  )
}

export default Admin