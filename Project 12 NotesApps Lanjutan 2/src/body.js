class inputBody extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `<div class="from-group">
        <label >Descriptions :</label>
        <textarea name="Descriptions" id="subdesc" cols="30" rows="10" required ></textarea>
    </div>`
    }
}

customElements.define('body-input', inputBody);