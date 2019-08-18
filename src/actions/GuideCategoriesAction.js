export const getGuideCategoriesRequest = () => {
    return {
      type: 'GET_GUIDE_CATEGORIES_REQUEST'
    }
};
export const getGuideCategoriesSuccess = (data) => {
    return {
      type: 'GET_GUIDE_CATEGORIES_SUCCESS',
      data,
    }
};
export const getGuideCategoriesFailed = (data) => {
    return {
      type: 'GET_GUIDE_CATEGORIES_FAILED',
      data,
    }
};