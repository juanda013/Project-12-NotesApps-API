class inputJudul extends HTMLElement {
    constructor () {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `<div class="from-group">
        <label >Title :</label>
        <input id="subtitle" type="text" required>
        </div>`
    }
}

customElements.define('title-input', inputJudul);