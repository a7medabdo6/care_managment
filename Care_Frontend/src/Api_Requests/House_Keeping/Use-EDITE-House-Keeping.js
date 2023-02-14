import baseUrl from '../../Api/baseURL'



export const UseHouseKeepingData = async (FormData) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.patch(`house-keeping/${FormData.id}`,FormData.data, config);
    return res.data;
}


