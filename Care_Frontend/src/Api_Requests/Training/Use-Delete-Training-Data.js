import baseUrl from '../../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseDeletTrainingData = async (id) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.delete(`training/${id}`, config);
    return res.data;
}

export { useGetData, UseDeletTrainingData };
