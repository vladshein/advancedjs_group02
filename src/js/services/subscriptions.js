import axios from 'axios';
import { API_URL } from '../utils/consts.js';
import { showErrorToast, showSuccessToast } from '../utils/utils.js';

class SubscriptionsService {
  email = '';
  getFormData() {
    this.email = document.getElementById('email').value.trim();
  }

  verifyData() {
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!emailPattern.test(this.email)) {
      // add iziToast error
      showErrorToast('Please enter a valid email address.');
      return false;
    }
    document.getElementById('email').value = ''; // Clear the input
    return true;
  }
  async postEmail() {
    try {
      const response = await axios.post(`${API_URL}/subscription`, {
        email: this.email,
      });
    } catch (error) {
      showErrorToast(error.response.data.message);
      return;
    }

    showSuccessToast('Email address added to subscriptions.');
  }
}

export { SubscriptionsService };
