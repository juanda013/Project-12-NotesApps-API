class inputDate extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `<div class="from-group" >
        <label >Date :</label>
        <input type="date" id="subdate" name="date" required>
        </div>`
    }
}

customElements.define('date-input', inputDate);