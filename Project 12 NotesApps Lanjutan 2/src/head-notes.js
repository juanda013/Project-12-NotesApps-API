class HeadNotes extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="header">
        <h1 id="header-title">NotesAppS</h1>
    </header>`;
    }
}


customElements.define('head-notes', HeadNotes);