import baseUrl from '.././../Api/baseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res;
}



const UseGetAllNoteData = async (url, parmas) => {
    const config = {
        headers: { token: localStorage.getItem("token") }
    }
    const res = await baseUrl.get("note", config);
    return res.data;
}

export { useGetData, UseGetAllNoteData };