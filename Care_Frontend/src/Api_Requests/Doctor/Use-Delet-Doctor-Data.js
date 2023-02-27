import baseUrl from '../../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseDeletDoctorsData = async (id, parmas) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.delete(`doctor/${id}`, config);
    return res.data;
}

export { useGetData, UseDeletDoctorsData };