export const API_URL = "https://your-energy.b.goit.study/api"
const queryParams = {
    limit: 8,
    page: 1,
    maxPage: 1,
    keyword: '',
    category_type: 'muscles',
    category_name: 'waist',
};

const category = {
    Muscles: 'muscles',
    Equipment: 'equipment',
    Bodyparts: 'bodypart',
}

const notFoundText = "Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";

export { queryParams, category, notFoundText };
