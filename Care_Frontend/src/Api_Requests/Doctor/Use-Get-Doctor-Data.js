import baseUrl from '.././../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseGetAllDoctorsData = async (url, parmas) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.get("doctor", config);
    return res.data;
}

export { useGetData, UseGetAllDoctorsData };