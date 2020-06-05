import {LitElement, html, css} from 'lit-element';

import '@claro/search-nav';

export class GenrePage extends LitElement {

    static get properties() {
        return {
            genre: {type: String},
            genre_id: {type: String},
            movies: {type: Array},
            list: {type: Array},
            genres: {type: Array}
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
                width: 300px;
                height: 170px;
                margin: 10px 10px 60px 10px;
                cursor: pointer;
                color: white;
            }
        `;
    }

    constructor() {
        super();
        this.genre = '';
        this.genre_id = '';
        this.movies = [];
        this.list = [];
        this.genres = [];
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.genres = ['gen_accion', 'gen_anime', 'gen_biograficas', 'gen_scifi', 'gen_cineoro', 'gen_clasicas', 'gen_comedia', 'gen_deportes', 'gen_docu', 'gen_drama', 'gen_familiares', 'gen_historicas', 'gen_infantiles', 'gen_latino', 'gen_musica', 'gen_romanticas', 'gen_terror'];
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('genre')) {
            const URL = 'https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.91&region=mexico&HKS=web5eb1992c638fb&user_id=11796727&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=';
            const indexGenre = this.genres.indexOf(this.genre);
            if (indexGenre !== -1) {
                const id = indexGenre + 67986;
                this.genre_id = id;
                fetch(`${URL}${id}`)
                    .then(response => response.json())
                    .then(payload => {
                        this.movies = payload.response.groups.map(movie => ({
                            id: movie.id,
                            uri: `/mexico/vcard/${this.genre}/${movie.title_uri}/${movie.id}`,
                            picture: movie.url_imagen_t2,
                            genre: this.genre,
                            title: movie.title
                        }));
                        this.list = [...this.movies];
                    });
            } else {
                console.error('Error al cargar películas.');
            }
        }
    }

    render() {
        return html`
        <search-nav .source="${this.movies}" @movies-filtered="${this.filterCallback}"></search-nav>
        <section class="main">
            ${this.list.map(movie => html`
                <div movie="${movie.id}" uri="${movie.uri}" @click="${this.selectMovie}">
                    <h3>${movie.title}</h3>
                    <img src="${movie.picture}" alt="${movie.title}" width="300px" height="170px">
                </div>
            `)}
        </section>
    `;
    }

    filterCallback(event) {
        this.list = event.detail.movies;
        this.requestUpdate();
    }

    selectMovie(event) {
        const movie = event.currentTarget.getAttribute('movie');
        const uri = event.currentTarget.getAttribute('uri');
        this.dispatchEvent(new CustomEvent('movie-selected', {
            detail: {
                uri, movie, genre_id: this.genre_id
            }
        }));
    }
}

window.customElements.define('genre-page', GenrePage);
