import baseUrl from '.././../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseGetWorkerPlansData = async ({ queryKey }) => {
    const [_, IdWorker] = queryKey
    console.log(IdWorker);
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.get(`users/${IdWorker}/plans`, config);
    return res.data;
}

export { useGetData, UseGetWorkerPlansData };