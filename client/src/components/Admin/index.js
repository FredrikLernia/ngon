import React, { useState, useEffect } from 'react'
import { Wrapper, Box, SpinnerWrapper, Spinner } from './styled'
import { auth } from '../../firebase'
import Login from './Login'
import Manage from './Manage'

const Admin = () => {
  const [page, setPage] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setPage('manage')
      }
      else {
        setPage('login')
      }
    })
  }, [])

  return (
    <Wrapper>
      {
        page && (
          <Box>
            {
              page === 'manage' ? <Manage loading={loading} setLoading={setLoading} />: <Login loading={loading} />
            }
          </Box>
        )
      }
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