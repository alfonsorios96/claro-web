import {LitElement, html} from 'lit-element';

import '@claro/search-nav';

export class HomePage extends LitElement {

    render() {
        return html`
        <h2>HOla, soy la página home</h2>
        <search-nav></search-nav>
    `;
    }
}

window.customElements.define('home-page', HomePage);
