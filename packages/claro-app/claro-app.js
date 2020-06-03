import {LitElement, html} from 'lit-element';

class ClaroApp extends LitElement {
    render() {
        return html`
            <h2>Hello World!</h2>  
        `;
    }
}

window.customElements.define('claro-app', ClaroApp);
