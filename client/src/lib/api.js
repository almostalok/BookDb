const API_BASE_URL = "http://localhost:5000";


export async function fetchRecord(params) {

    const response=await fetch (`${API_BASE_URL}/record`);

    if(!response.ok){
        throw new Error(`unable to connect backend`);
    }

    return response.json();
    
}