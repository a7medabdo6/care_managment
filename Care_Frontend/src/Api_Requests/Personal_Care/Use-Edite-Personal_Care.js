import baseUrl from '../../Api/baseURL'



export const UseEditePersonalCareDataToken = async (FormData) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.patch(`personal-care/${FormData.id}`,FormData.data, config);
    return res.data;
}


