import axios from 'axios';

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})

export const getTrails = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/trails`,
            getAuthConfig()
        )
    } catch (e) {
        throw e;
    }
}

export const saveTrail = async (trail) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/trails`,
            trail,
            getAuthConfig()
        )
    } catch (e) {
        throw e;
    }
}