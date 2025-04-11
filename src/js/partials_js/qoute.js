import { refs } from '../utils/refs.js';
import { quotesService } from '../services/services.js';
import { showErrorToast } from '../utils/utils.js';

function rendelQuote({ author, quote }) {
  return `<p class="quote-text">
        ${quote}
      </p>
      <p class="quote-subtitle">${author}</p>`;
}

async function handleRendelQuote() {
  try {
    
    const quoteAndDateFromLS = quotesService.getQuoteDataFromLS();
    if (!quoteAndDateFromLS || Date.now() !== quoteAndDateFromLS.currentDate) {
      const quoteData = await quotesService.getQuote();
      quotesService.setQuoteDataToLS(quoteData);

      refs.qouteWrap.insertAdjacentHTML('beforeend', rendelQuote(quoteData));
    } else {
      refs.qouteWrap.insertAdjacentHTML(
        'beforeend',
        rendelQuote(quoteAndDateFromLS.quote)
      );
    }
  } catch (error) {
    showErrorToast(error.message);
  }
}

export { handleRendelQuote };
