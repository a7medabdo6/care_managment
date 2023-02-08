import baseUrl from '../../Api/baseURL'


export const UseCreateRiskAssesmentData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'risk-assesment',data,config );
  };