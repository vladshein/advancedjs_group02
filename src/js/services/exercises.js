import axios from "axios";
import { API_URL } from "../utils/consts.js";

class ExerciseService {
  async getExercises() {
    const { data } = await axios.get(`${API_URL}/exercises`);
    return data;
  }

  async getExerciseById(id) {
    const { data } = await axios.get(`${API_URL}/exercises/${id}`);
    return data;
  }
}

export { ExerciseService };
