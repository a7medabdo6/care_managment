import baseUrl from '../../Api/baseURL'



export const UseNotegData = async (FormData) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.patch(`note/${FormData.id}`,FormData.data, config);
    return res.data;
}


