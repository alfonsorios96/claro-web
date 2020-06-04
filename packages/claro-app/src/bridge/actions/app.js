export const UPDATE_PAGE = 'UPDATE_PAGE';

export const navigate = (path) => (dispatch) => {
    const page = path === '/' ? 'home' : path.slice(1);
    dispatch(loadPage(page));
};

const loadPage = (page) => async (dispatch) => {
    switch (page) {
        case 'home':
            await import('../../pages/home-page/home-page.js');
            break;
        case 'movie':
            await import('../../pages/movie-page/movie-page.js');
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