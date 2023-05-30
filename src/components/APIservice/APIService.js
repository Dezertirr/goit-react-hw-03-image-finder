import axios from "axios";

const KEY = '36257865-655e5ef0d461eea0383acd722'

axios.defaults.baseURL = `https://pixabay.com/api/`

export const getSearchPhotoAPI = (query, page = 1) => {
    return axios
    .get (
        `?key=${KEY}`,
        {
        params: {
            q:query,
            page,
            per_page:10,
        }
    })
    .then ((response) => response.data)

}
