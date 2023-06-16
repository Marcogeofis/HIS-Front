import { useCallback, useState, Context, useContext } from "react"
import { authenticateUser } from "@/services/authenticateUser"
import ContextUser from "@/context/userContext"

export default function useHisUser () {

    const { userHis, jwt, setUserHis, setJWT } = useContext(ContextUser)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(async ({email, password}) => {
        try {
            const data = await authenticateUser({email, password});
            const { user, jwt } = data;
            window.localStorage.setItem('numHis', user)
            setUserHis(user)
            window.sessionStorage.setItem('jwt', jwt)
            setState({loading: false, error: false});
            setJWT(jwt)
        } catch (error) {
            window.sessionStorage.removeItem('jwt');
            window.localStorage.removeItem('numHis')
            setState({loading: false, error: true})
        }
    }, [setJWT, setUserHis])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt');
        window.localStorage.removeItem('numHis')
        setJWT(null)
    },[setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,
        userHis
    }
}