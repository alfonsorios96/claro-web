import {LitElement, html, css} from 'lit-element';

export class ClaroApp extends LitElement {
    static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

    render() {
        return html`
      <h1>Hello, mundo!</h1>
    `;
    }

    foo(): string {
        return 'foo';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'claro-app': ClaroApp;
    }
}

window.customElements.define('claro-app', ClaroApp);
