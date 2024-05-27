import './css/style.css'

import './head-notes.js';
import './title.js';
import './date.js';
import './body.js';

const baseUrl = 'https://notes-api.dicoding.dev/v2';

const getNotes = async () => {
    try {
        const response = await fetch(`${baseUrl}/notes`);
        const responseJSON = await response.json();
        if (responseJSON.error) {
            showResposeMessage(responseJSON.message);
        } else {
            daftarNotes(responseJSON.data);
        }
    } catch (status) {
        showResposeMessage(status)
    }    
};

const addNotes = async (note) => {
    try {
        const options = {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        };

        const response = await fetch(`${baseUrl}/notes`, options);
        const responseJSON =await response.json();
        showResposeMessage(responseJSON.message);
        getNotes();
    } catch (status) {
        showResposeMessage(status);
    }
};


const deleteNotes = () => {
    fetch(`${baseUrl}/notes/{note_id}`, {
        method: 'DELETE',
    })

    .then((response) => {
        return response.json();
    })
    .then((responseJSON) => {
        showResposeMessage(responseJSON.message);
        getNotes();
    })
    .catch((status) => {
        showResposeMessage(status);
    });
};


const daftarNotes = (data) => {
    const noteListElement = document.getElementById("list-title");
    noteListElement.innerHTML = '';

    data.forEach((note) => {
        noteListElement.innerHTML += `
        <div class="inner">
            <h2>${note.title}</h2>
            <p>${note.body}</p>
            <h3>${note.createdAt}</h3>
            <button class="remove-button"> Delete</button>
        </div>
        `;
    });  
    
    const deleteButtons = document.querySelectorAll('.remove-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', e => {
            const noteId = e.target.dataset.id;

            deleteNotes(noteId);
        });
    });
};

const showResposeMessage = (message = 'Check your internet connection') => {
    alert(message);
};

document.addEventListener('DOMContentLoaded' ,function () {
    const noteForm =document.querySelector('form');
    const title = noteForm.elements.subtitle;//Mengambil Value pada tittle
    const body = noteForm.elements.subdesc;

    noteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const note = {
            title: title.value,            
            body: body.value,
        };

        switch (e.submitter.textContent) {
            case 'Submit':
                addNotes(note);
                break;
        }
    })
    getNotes();
})
