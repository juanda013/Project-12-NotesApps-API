const BASE_URL = 'https://notes-api.dicoding.dev/v2#/';

class notesApi {
    static searchNotes(query)  {
        return fetch(`${BASE_URL}/notes/search?t=${query}`)
          .then((response) => {
            if (response.status >= 200 && response.status <300) {
                return response.json();
            } else {
                return Promise.reject(new Error(`Sory Eroor Gan`));
            }
          })
          .then((responseJSon) => {
            const {data :notes } = responseJSon;
            if (notes.length > 0) {
                return Promise.resolve(notes);
            } else {
                return Promise.reject(new Error(`\`${query}\`is not found`));
            }
          });
    }
}

export default notesApi;