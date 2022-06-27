import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



// headers: {
//     'X-RapidAPI-Key': 'f799f304f2mshe06fd5089af082dp18d286jsn19a0353d5233',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f799f304f2mshe06fd5089af082dp18d286jsn19a0353d5233',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
    });
    return data;
    
}