import axios from 'axios'

const loginUrl = '/api/login'

const login = async (credentials) => {
    const user = await axios.post(loginUrl, credentials)
    return user.data
}

const loginService = {
    login
}

export default loginService