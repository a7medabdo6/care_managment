import baseUrl from '../Api/baseURL'


export const useInsertDataEditeProfile  = async formData => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'worker/create',formData,config );
  };