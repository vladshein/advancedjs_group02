import axios from 'axios';
import { API_URL } from '../utils/consts.js';
import { showErrorToast } from '../utils/utils.js';

class ExerciseService {
  async getExercises() {
    const { data } = await axios.get(`${API_URL}/exercises`);
    return data;
  }

  async getExerciseById(id) {
    try {
      const { data } = await axios.get(`${API_URL}/exercises/${id}`);
      return data;
    } catch (error) {
      showErrorToast(`Error fetching exercise by ID: ${error}`);
      throw error;
    }
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
    };
    if (keyword) {
      params.keyword = keyword;
    }
    const { data } = await axios.get(`${API_URL}/exercises`, { params });
    return data;
  }

  async updateRating(id, rating) {
    try {
      const { data } = await axios.patch(
        `${API_URL}/exercises/${id}/rating`,
        rating
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export { ExerciseService };
