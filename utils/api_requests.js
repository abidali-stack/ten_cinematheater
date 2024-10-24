import { baseURL} from "./api_directory";


  export async function call(endpoint, method = 'GET', body = null, header = {}) {
    const url = `${baseURL}${endpoint}`;
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    };
   
    if (body) {
      requestOptions.body = JSON.stringify(body);
    }
    
    console.log("URL:"+url)
   // console.log("Request:"+JSON.stringify(requestOptions))
   
    try {
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();
      
      // Check if the request was successful
      //console.log("Response:"+JSON.stringify(responseData))
      // if (!response.ok) {
      //   throw new Error(responseData.message || 'Something went wrong');
      // }

      return responseData;
    } catch (error) {
      // Handle errors
      console.error('API call error:', error);
      throw error;
    }
  }
