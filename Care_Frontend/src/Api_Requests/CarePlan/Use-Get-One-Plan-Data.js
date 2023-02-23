import baseUrl from '.././../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseGetOnePlanData = async ({ queryKey })  => {
    const [_, id] = queryKey
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.get(`plan/${id}`, config);
    return res.data;
}

export { useGetData, UseGetOnePlanData };