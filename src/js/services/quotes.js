import axios from 'axios';
import { API_URL } from '../utils/consts.js';

class QuotesService {
  static QUOTE_LS_KEY = 'quote-and-date';
  async getQuote() {
    const { data } = await axios.get(`${API_URL}/quote`);
    return data;
  }

  setQuoteDataToLS(quote, currentDate = Date.now()) {
    const quoteAndDateForLS = { quote, currentDate };
    localStorage.setItem(
      QuotesService.QUOTE_LS_KEY,
      JSON.stringify(quoteAndDateForLS)
    );
  }

  getQuoteDataFromLS() {
    const quoteAndDateFromLS = JSON.parse(
      localStorage.getItem(QuotesService.QUOTE_LS_KEY)
    );
    return quoteAndDateFromLS;
  }
}

export { QuotesService };
