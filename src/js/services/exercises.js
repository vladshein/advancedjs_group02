import axios from 'axios';
import { API_URL } from '../utils/consts.js';

class ExerciseService {
  async getExercises() {
    const { data } = await axios.get(`${API_URL}/exercises`);
    return data;
  }

  async getExerciseById(id) {
    const { data } = await axios.get(`${API_URL}/exercises/${id}`);
    return data;
  }

  async getExercisesWithParams({
    category_type,
    category_name,
    limit = 8,
    page = 1,
    keyword = '',
  }) {

    const params = {
      [category_type]: category_name,
      limit,
      page,
    }
    if (keyword) {
      params.keyword = keyword;
    }
    const { data } = await axios.get(`${API_URL}/exercises`, {params});
    return data;
  }
}

export { ExerciseService };
