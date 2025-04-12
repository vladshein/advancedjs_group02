import axios from 'axios';
import { API_URL } from '../utils/consts.js';

class FiltersService {
  static filterQuery = '';

  // метод що повертає значення обраної категорії після натискання на кнопку
    getFilterQuery() {
        if (FiltersService.filterQuery === '') {
          return 'Muscles';
      } return FiltersService.filterQuery;
  }
  // метод що зберігає значення обраного фільтру  після натискання на кнопку
  setFilterQuery(value) {
    FiltersService.filterQuery = value;
  }
  // метод робить запит відповідно до обраного фільтру і
  // повертає відфільтровані дані для подальшого використання
  async fetchFilteredData(filter, limit, page) {
    const axiosOptions = {
      filter,
      limit,
      page,
    };
    // const filteredData = await axios.get(`${API_URL}/filters`, axiosOptions
    // );
    const filteredData = await axios.get(`${API_URL}/filters`, {
      params: axiosOptions,
    });
    return filteredData.data;
  }
}

export { FiltersService };
