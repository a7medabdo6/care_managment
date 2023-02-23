import baseUrl from '../../Api/baseURL'


export const UseCreateDoctorsData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'doctor',data,config );
  };