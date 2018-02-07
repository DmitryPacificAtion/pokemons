import auth from './Middlewares/Authenticate';

export const IS_FAVORITE_POKEMON = 'IS_FAVORITE_POKEMON';

export const favoritePokemon = () => {
    return { type: 'IS_FAVORITE_POKEMON', isSelected: false, isHovered: false};
};