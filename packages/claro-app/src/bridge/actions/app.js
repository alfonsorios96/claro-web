export const UPDATE_PAGE = 'UPDATE_PAGE';

export const navigate = (path) => (dispatch) => {
    const page = path === '/' ? 'home' : path.slice(1);

    const order = page.split('/');
    let data = new Map();

    switch (order.length) {
        case 1:
            data.set('page', 'home');
            data.set('country', order[0]);
            break;
        case 2:
            data.set('page', 'genre');
            data.set('country', order[0]);
            data.set('genre', order[1]);
            break;
        case 5:
            data.set('page', 'movie');
            data.set('country', order[0]);
            data.set('genre', order[2]);
            data.set('movie', order[4]);
            break;
    }

    dispatch(loadPage(data.get('page')));
};

const loadPage = (page) => async (dispatch) => {
    switch (page) {
        case 'home':
            await import('../../pages/home-page/home-page.js');
            break;
        case 'movie':
            await import('../../pages/movie-page/movie-page.js');
            break;
        case 'genre':
            await import('../../pages/genre-page/genre-page.js');
            break;
        default:
            page = 'home';
            await import('../../pages/home-page/home-page.js');
    }

    dispatch(updatePage(page));
};

const updatePage = (page) => {
    return {
        type: UPDATE_PAGE,
        page
    };
};