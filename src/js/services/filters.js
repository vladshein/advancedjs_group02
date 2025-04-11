import axios from 'axios';
import { API_URL } from '../utils/consts.js';

class FiltersService {
  static filterQuery = '';

  // метод що повертає значення обраної категорії після натискання на кнопку
  getFilterQuery() {
    return FiltersService.filterQuery;
  }
  // метод що зберігає значення обраного фільтру  після натискання на кнопку
  setFilterQuery(value) {
    FiltersService.filterQuery = value;
  }
  // метод робить запит відповідно до обраного фільтру і 
  // повертає відфільтровані дані для подальшого використання
  async fetchFilteredData(limit = 12, page = 1) {
    const axiosOptions = {
      params: {
        filter: this.getFilterQuery(),
        limit: limit,
        page: page,
      },
    };
    const { filteredData } = await axios.get(
      `${API_URL}/filters/`,
      axiosOptions
    );
    return filteredData;
  }
}

export { FiltersService };
