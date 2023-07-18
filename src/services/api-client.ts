import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:"4c3c267d706846e9acd1e54ee6d47069"
    }
})
