import notesApi from "./baru.js";

class dummyList extends HTMLElement {
    constructor() {
        super();
        this.notes = notesApi;
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.dummyRender();
        this.dummyEventListener();
    }

    dummyRender() {
        const notesContainer = document.createElement('div');
        notesContainer.id = 'dummy-list';

        this.notes.forEach(function(note) {
            const dummyElement = document.createElement('div');
            dummyElement.innerHTML =  `
                <div class ='dummy-content'>
                    <h2>${note.title}</h2>
                    <p>${note.body}</p>
                    <p>${note.createdAt}</p>
                </div>
            `;
            notesContainer.appendChild(dummyElement);
            
        });

        const style = document.createElement('style');
        style.textContent = `
        #dummy-list {
            display:grid;
            justify-content:center;
            padding-bottom:20px;
            
        }
        
        .dummy-content {
            border:1px solid black;
            display:flex;
            flex-direction:column;
            max-width:500px;
            padding: 20px;
            
            margin:20px;
            padding-bottom:10px;
            
        }
        .dummy-content p {
            text-align:justify;
        }
        `;
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(notesContainer);
    }

    makeDummy(title,body) {
        const newDummy = {title, body, createdAt: new Date().toISOString(), archived: false};
        this.notes.push(newDummy);
        const notesContainer = this.shadowRoot.getElementById('dummy-list');
        const dummyElement = document.createElement('div');
        dummyElement.innerHTML = `
        <div class='dummy-content'>
           <h2>${note.title}</h2>
           <p>${note.body}</p>
           <p>Tanggal:${note.createdAt}</p>
        </div>
        `;
        notesContainer.appendChild(dummyElement);
    }

    dummyEventListener() {
        document.addEventListener('DummyAdded', function(e) {
            const {title, body} = e.detail;
            this.makeDummy(title,body);
        });
        notesApi.searchNotes(query)
          .then((result) => {
            displayResult(result);

            
          })
    }
    
}

customElements.define('dummy-list', dummyList);
