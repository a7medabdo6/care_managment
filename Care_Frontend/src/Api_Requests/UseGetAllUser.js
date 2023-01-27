import baseUrl from '../Api/baseURL'
const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseGetAllUserData = async (url, parmas) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.get("users", config);
    return res.data;
}

export { useGetData, UseGetAllUserData };