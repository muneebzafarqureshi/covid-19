import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//const url = 'https://covid-19-data.p.rapidapi.com';
//const key = 'e46b72bcfamsh4897f60efcb115dp1f9bb4jsn3f6ab321f284';
export const fetchData = async () => {
try {
        const response = await axios.get(url);
    
        return response;
}
 catch (error) {   
}

}
