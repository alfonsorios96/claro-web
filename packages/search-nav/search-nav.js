import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-input/paper-input.js';
let SearchNav = /** @class */ (() => {
    class SearchNav extends LitElement {
        render() {
            return html `
        <paper-input label="Hola :D"></paper-input>   
    `;
        }
    }
    SearchNav.styles = css `
    
  `;
    return SearchNav;
})();
export { SearchNav };
window.customElements.define('search-nav', SearchNav);
//# sourceMappingURL=search-nav.js.map