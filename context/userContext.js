import { createContext, useState } from 'react'

const Context = createContext({})

export function UserContextProvider ({children}) {
  const [userHis, setUserHis] = useState({})
  const [jwt, setJWT] = useState({})

  return <Context.Provider value={{userHis, jwt, setUserHis, setJWT}}>
    {children}
  </Context.Provider>
}

export default Context;