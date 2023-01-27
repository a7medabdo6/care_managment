import baseUrl from '../../Api/baseURL'


export const UseCreateServiceUserData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'service-user',data,config );
  };