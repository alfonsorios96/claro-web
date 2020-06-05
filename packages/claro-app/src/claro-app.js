import {html, LitElement, css} from 'lit-element';

import {connect} from 'pwa-helpers/connect-mixin.js';
import {installRouter} from 'pwa-helpers/router.js';
import {updateMetadata} from 'pwa-helpers/metadata.js';

import {store} from './bridge/store.js';

import {
    navigate
} from './bridge/actions/app.js';

export class ClaroApp extends connect(store)(LitElement) {

    static get properties() {
        return {
            _page: {type: String},
            path: {type: String},
            genre: {type: String},
            genre_id: {type: String},
            movie: {type: String}
        };
    }

    static get styles() {
        return css`        
            .header {
                display: flex;
                justify-content: space-between;
                color: white;
                margin-bottom: 10px;
            }
            .menu_user {
                width: 35px;
                height: 35px;
            }
            
            .user-profile {
                margin-top: 25px;
            }
            
            .user-profile > img{
                margin-right: 5px;
                vertical-align: middle;
            }
            
            @media only screen and (max-width: 700px), only screen and (max-device-width: 700px) {
              .user-profile {
                width: 200px;
              }
            }
        `;
    }

    constructor() {
        super();
        this._page = 'home';
        this.genre = '';
        this.path = '';
        this.genre_id = '';
        this.movie = '';
    }

    firstUpdated() {
        installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    }

    render() {
        return html`

        <section class="header">
            <a href="/mexico">
                <img src="https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg" alt="Claro Video Logo" width="223px" height="63px">
             </a>            
             <div class="user-profile">
                <img src="https://clarovideocdn5.clarovideo.net/pregeneracion/cms/apa/uat_531eed34tvfy7b73a818a234/avatar01.png?1573670370" class="menu_user" alt="Usuario Avatar">
                MANUEL ALFONSO RIOS MEDELLIN
            </div>
        </section>
        
     <main role="main">
     ${
            this._page === 'genre' ?
                html`<genre-page .genre="${this.genre}" @movie-selected="${this.movieSelected}"></genre-page>` :
                ''
        }
        ${
            this._page === 'home' ?
                html`<home-page .path="${this.path}" @genre-selected="${this.genreSelected}"></home-page>` :
                ''
        }
         ${
            this._page === 'movie' ?
                html`<movie-page .id="${this.movie}" .genre="${this.genre_id}" @movie-selected="${this.movieSelected}"></movie-page>` :
                ''
        }
      </main>
    `;
    }

    genreSelected({detail}) {
        this.genre = detail.genre;
        history.pushState(null, "", `/mexico/${this.genre}`);
        store.dispatch(navigate(decodeURIComponent(location.pathname)));
    }

    movieSelected({detail}) {
        this.movie = detail.movie;
        this.genre_id = detail.genre_id;
        history.pushState(null, "", detail.uri);
        store.dispatch(navigate(decodeURIComponent(location.pathname)));
    }

    stateChanged(state) {
        this._page = state.app.page;
    }
}

window.customElements.define('claro-app', ClaroApp);
