import baseUrl from '../../Api/baseURL'


export const UseCreatePersonalCareData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'personal-care',data,config );
  };
