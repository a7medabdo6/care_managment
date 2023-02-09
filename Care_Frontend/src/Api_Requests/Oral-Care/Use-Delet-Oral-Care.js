import baseUrl from '../../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseDeletOralCareData = async (id, parmas) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.delete(`oral-care/${id}`, config);
    return res.data;
}

export { useGetData, UseDeletOralCareData };