import {LitElement, html, css} from 'lit-element';

export class MoviePage extends LitElement {

    static get styles(){
        return css``;
    }

    render() {
        return html`
        <h2>HOla, soy la página movie</h2>  
    `;
    }
}

window.customElements.define('movie-page', MoviePage);
