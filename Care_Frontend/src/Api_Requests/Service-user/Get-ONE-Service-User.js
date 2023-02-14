import baseUrl from '../../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseGetONEServiceUserData = async (url, Id) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.get("service-user/{Id}", config);
    return res.data;
}

export { useGetData, UseGetONEServiceUserData };
