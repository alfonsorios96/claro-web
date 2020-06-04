import {LitElement, html, css} from 'lit-element';
import '@polymer/paper-input/paper-input.js';

export class SearchNav extends LitElement {
    static styles = css`
    
  `;

    render() {
        return html`
        <paper-input label="Hola :D"></paper-input>   
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'search-nav': SearchNav;
    }
}

window.customElements.define('search-nav', SearchNav);
