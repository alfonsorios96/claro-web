import {LitElement, html, css} from 'lit-element';
import '@polymer/paper-input/paper-input.js';

export class SearchNav extends LitElement {
    static get styles() {
        return css``;
    }

    render() {
        return html`
        <paper-input label="Hola :D"></paper-input>   
    `;
    }
}

window.customElements.define('search-nav', SearchNav);
