import {LitElement, html, css} from 'lit-element';
import '@polymer/paper-input/paper-input.js';

export class SearchNav extends LitElement {
    static get styles() {
        return css`
            paper-input {
                --paper-input-container-input-color: white;
            }
        `;
    }

    static get properties() {
        return {
            source: {type: Array}
        };
    }

    constructor() {
        super();
        this.source = [];
    }

    render() {
        return html`
        <paper-input label="Busca tu película" @value-changed="${this._onChangeValue}"></paper-input>   
    `;
    }

    _onChangeValue({detail}) {
        let data = [];
        if (detail.value !== '') {
            data = this.source.filter(movie => movie.title.toUpperCase().includes(detail.value.toUpperCase()));
        } else {
            data = this.source;
        }

        this.dispatchEvent(new CustomEvent('movies-filtered', {
            detail: {
                movies: data
            }
        }));
    }
}

window.customElements.define('search-nav', SearchNav);
