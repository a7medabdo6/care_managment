import baseUrl from '../../Api/baseURL'


export const UseCreateOralCareData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'oral-care',data,config );
  };