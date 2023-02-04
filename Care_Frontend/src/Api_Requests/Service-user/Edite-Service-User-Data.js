import baseUrl from '../../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseEditeServiceUserDataToken = async (FormData) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.patch(`service-user/${FormData.id}`,FormData.data, config);
    return res.data;
}

export { useGetData, UseEditeServiceUserDataToken };