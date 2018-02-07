import auth from './Middlewares/Authenticate';

export const FAVORITE_POKEMON = 'FAVORITE_POKEMON';

export const favoritePokemon = () => {
    return { type: 'FAVORITE_POKEMON', isFavorite: false};
};