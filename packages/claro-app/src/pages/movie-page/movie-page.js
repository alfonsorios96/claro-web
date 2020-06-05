import {LitElement, html, css} from 'lit-element';

export class MoviePage extends LitElement {

    static get properties() {
        return {
            id: {type: String},
            movie: {type: Object}
        };
    }

    constructor() {
        super();
        this.id = '';
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
    `;
    }
}

window.customElements.define('movie-page', MoviePage);
