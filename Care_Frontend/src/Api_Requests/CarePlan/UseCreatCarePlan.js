import baseUrl from '../../Api/baseURL'


export const UseCreateCarePlantData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'plan',data,config );
  };