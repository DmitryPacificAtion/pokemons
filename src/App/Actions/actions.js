import auth from './Middlewares/Authenticate';

export const IS_SELECTED = 'IS_SELECTED';
export const IS_LOADING = 'IS_LOADING';
export const GET_CONTENT = 'GET_CONTENT';

export const selectAction = (selected) => {
    return {type: IS_SELECTED, isSelected: selected};
};
export const onLoadingAction = (flag) => {
    return {type: IS_LOADING, isLoading: flag};
};
export const fetchingAction = () => {
    return auth.getData();
};
