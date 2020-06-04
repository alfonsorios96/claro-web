import {LitElement, html, css} from 'lit-element';

export class HomePage extends LitElement {

    static get properties() {
        return {
            colors: {type: Array},
            genres: {type: Array},
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
        this.colors = [];
        this.genres = [];
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.colors = ['#bf98be', '#1e985a', '#8eb4a0', '#a4ab65', '#5d8d9f', '#253669', '#4c7ff4', '#2c5143', '#4805ff', '#9ed874', '#b7c1f0', '#eff06a', '#febf3b', '#1050b3', '#3d87ad', '#81dca4'];
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
                title: 'Ciencia Ficció'
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
                <div style="background-color: ${this._randomColor()}" genre="${genre.code}" @click="${this.selectGenre}">${genre.title}</div>
           `)}
        </section> 
    `;
    }

    selectGenre(event) {
        const genre = event.target.getAttribute('genre');
        this.dispatchEvent(new CustomEvent('genre-selected', {
            detail: {
                genre
            }
        }));
    }

    _randomColor() {
        const indexColor = Math.floor(Math.random() * this.colors.length - 1) + 1;
        const color = this.colors[indexColor];
        this.colors.slice(color, 1);
        return color;
    }
}

window.customElements.define('home-page', HomePage);
