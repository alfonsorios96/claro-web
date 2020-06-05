import {LitElement, html, css} from 'lit-element';

export class MoviePage extends LitElement {

    static get properties() {
        return {
            id: {type: String},
            genre: {type: String},
            movie: {type: Object},
            movies: {type: Array}
        };
    }

    constructor() {
        super();
        this.id = '';
        this.genre = '';
        this.movies = [];
        this.movie = {
            extendedcommon: {
                media: {
                    rating: {
                        code: ''
                    },
                    publishyear: '',
                    language: {
                        options: {
                            option: []
                        }
                    }
                },
                roles: {
                    role: []
                }
            }
        };
    }

    static get styles() {
        return css`
            .main {
                color: white;
                display: flex;
                justify-content: space-between;
            }
            
            .responsive {
              width: 100%;
              height: auto;
            }
            
            .column {
                width: 675px;
                hegiht: 380px;
                margin: 10px;
            }
            
            h2 {
                color: rgb(236, 175, 42);
                margin-bottom: 10px;
            }
            
            h3 {
                color: white;
            }
            
            .recommended {
                display: flex;
                justify-content: space-around;
            }
            
            .recommended > div {
                width: 300px;
                height: 170px;
                margin: 10px 10px 60px 10px;
                cursor: pointer;
                color: white;
            }
            
            @media only screen and (max-width: 700px), only screen and (max-device-width: 700px) {
              .main {
                flex-direction: column;
              }
              
              .column {
                max-width: 500px;
              }
            }
        `;
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('id')) {
            const URL = 'https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.91&region=mexico&HKS=web5eb1992c638fb&user_id=11796727&group_id=';
            fetch(`${URL}${this.id}`)
                .then(response => response.json())
                .then(payload => {
                    this.movie = payload.response.group.common;
                });
        }

        if (_changedProperties.has('movie')) {
            const URL = 'https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.91&region=mexico&HKS=web5eb1992c638fb&user_id=11796727&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=';
            fetch(`${URL}${this.genre}`)
                .then(response => response.json())
                .then(payload => {
                    const movies = payload.response.groups.map(movie => ({
                        id: movie.id,
                        uri: `/mexico/vcard/${this.genre}/${movie.title_uri}/${movie.id}`,
                        picture: movie.url_imagen_t2,
                        genre: this.genre,
                        title: movie.title
                    }));
                    while (this.movies.length < 4) {
                        const randomMovie = movies[Math.floor(Math.random() * movies.length - 1) + 1];
                        if (randomMovie.id !== this.movie.id) {
                            this.movies = [...this.movies, randomMovie];
                        }
                    }
                    this.requestUpdate();
                });
        }
    }

    render() {
        return html`
        <section class="main">
            <div class="column">
                 <img class="responsive" src="${this.movie.image_large}" alt="${this.movie.image_large_alt}">
            </div>
            
            <div class="column">   
      <h2>${this.movie.title}</h2>
            <p>${this.movie.duration} | ${this.movie.extendedcommon.media.publishyear} | ${this.movie.extendedcommon.media.rating.code}</p>
            <p>${this.movie.large_description}</p>
            <p>IDIOMAS</p>
            <ul>
                ${this.movie.extendedcommon.media.language.options.option.map(option => html`
                    <li>${option.label_large}</li>
                `)}
            </ul>
            <p>Talentos: 
                ${this.movie.extendedcommon.roles.role.reduce((acc, rol) => [...acc, ...rol.talents.talent], []).map(talent => html`
                    <span>${talent.fullname}</span> | 
                `)}
            </p>      
</div>
        </section>
        
        <h3>Otros usuario también vieron: </h3>
        
        <section class="recommended">
            ${this.movies.map(movie => html`
                <div movie="${movie.id}" uri="${movie.uri}" @click="${this.selectMovie}">
                    <h3>${movie.title}</h3>
                    <img src="${movie.picture}" alt="${movie.title}" width="300px" height="170px">
                </div>
            `)}
        </section>
    `;
    }

    selectMovie(event) {
        const movie = event.currentTarget.getAttribute('movie');
        const uri = event.currentTarget.getAttribute('uri');
        this.dispatchEvent(new CustomEvent('movie-selected', {
            detail: {
                uri, movie, genre_id: this.genre
            }
        }));
    }
}

window.customElements.define('movie-page', MoviePage);
