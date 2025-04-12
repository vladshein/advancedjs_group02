import axios from 'axios';
import { API_URL } from '../utils/consts.js';

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
      console.error('Error fetching exercise by ID:', error);
      throw error;
    }
  }

  async getExercisesWithParams({
    category_type,
    category_name,
    limit,
    page,
    keyword,
  }) {
    const axiosOptions = {
      params: {
        [category_type]: category_name,
        limit,
        page,
        keyword,
      },
    };
    const { data } = await axios.get(`${API_URL}/exercises/`, axiosOptions);
    return data;
  }

  async updateRating(id, rating) {
    console.log('rating', rating);

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
