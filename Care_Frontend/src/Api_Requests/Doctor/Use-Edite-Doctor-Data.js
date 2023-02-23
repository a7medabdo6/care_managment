import baseUrl from '../../Api/baseURL'



export const UseDoctorsgData = async (FormData) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.patch(`doctor/${FormData.id}`,FormData.data, config);
    return res.data;
}


