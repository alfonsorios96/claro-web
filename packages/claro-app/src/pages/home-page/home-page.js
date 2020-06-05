import {LitElement, html, css} from 'lit-element';

export class HomePage extends LitElement {

    static get properties() {
        return {
            genres: {type: Array},
            path: {type: String}
        };
    }

    static get styles() {
        return css`
            .main {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
            }
            
            .main > div {
                text-align: center;
                display: flex;
                  align-items: center;
                  justify-content: center;
                border: 1px solid black;
                width: 200px;
                height: 200px;
                margin: 10px;
                font-size: 35px;
                line-height: 75px;
                cursor: pointer;
            }
        `;
    }

    constructor() {
        super();
        this.path = '';
        this.genres = [];
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.genres = [
            {
                code: 'gen_accion',
                title: 'Acción y Aventura'
            },
            {
                code: 'gen_anime',
                title: 'Ánime y videojuegos'
            },
            {
                code: 'gen_biograficas',
                title: 'Biográficas'
            },
            {
                code: 'gen_scifi',
                title: 'Ciencia Ficción'
            },
            {
                code: 'gen_cineoro',
                title: 'Cine de Oro'
            },
            {
                code: 'gen_clasicas',
                title: 'Clásicas'
            },
            {
                code: 'gen_comedia',
                title: 'Comedia'
            },
            {
                code: 'gen_deportes',
                title: 'Deportes'
            },
            {
                code: 'gen_docu',
                title: 'Documentales'
            },
            {
                code: 'gen_drama',
                title: 'Drama'
            },
            {
                code: 'gen_familiares',
                title: 'Familiares'
            },
            {
                code: 'gen_historicas',
                title: 'Históricas'
            },
            {
                code: 'gen_infantiles',
                title: 'Infantiles'
            },
            {
                code: 'gen_latino',
                title: 'Latinoamericanas'
            },
            {
                code: 'gen_musica',
                title: 'Música'
            },
            {
                code: 'gen_romanticas',
                title: 'Románticas'
            },
            {
                code: 'gen_terror',
                title: 'Terror y Suspenso'
            }
        ];
    }

    render() {
        return html`
        <section class="main">
           ${this.genres.map(genre => html`
                <div genre="${genre.code}" @click="${this.selectGenre}">
                    <img src="${this.path + genre.code}.jpg" alt="${genre.title}">
                </div>
           `)}
        </section> 
    `;
    }

    selectGenre(event) {
        const genre = event.currentTarget.getAttribute('genre');
        this.dispatchEvent(new CustomEvent('genre-selected', {
            detail: {
                genre
            }
        }));
    }
}

window.customElements.define('home-page', HomePage);
