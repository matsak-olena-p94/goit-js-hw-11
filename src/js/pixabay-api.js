export default function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/"; 
    const API_KEY = "45241203-3832c115afebf1441ca7c88b6";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }).catch((error) => {
        iziToast.error({
          position: "topRight",
            message: `${error}`,
        });
      })
}

// export async function fetchImages(query) {
//     const params = new URLSearchParams({
//       key: API_KEY,
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//     });
  
//     try {
//       const response = await fetch(`${BASE_URL}?${params.toString()}`);
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error fetching images:', error);
//       throw error;
//     }
//   }
