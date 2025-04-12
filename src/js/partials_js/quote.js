import { refs } from '../utils/refs.js';
import { quotesService } from '../services/services.js';
import { showErrorToast } from '../utils/utils.js';

function renderQuote({ author, quote }) {
  return `<p class="quote-text">
        ${quote}
      </p>
      <p class="quote-subtitle">${author}</p>`;
}

async function handleRenderQuote() {
  try {
    const quoteAndDateFromLS = quotesService.getQuoteDataFromLS();
    if (!quoteAndDateFromLS || Date.now() !== quoteAndDateFromLS.currentDate) {
      const quoteData = await quotesService.getQuote();
      quotesService.setQuoteDataToLS(quoteData);

      refs.quoteWrap.insertAdjacentHTML('beforeend', renderQuote(quoteData));
    } else {
      refs.quoteWrap.insertAdjacentHTML(
        'beforeend',
        renderQuote(quoteAndDateFromLS.quote)
      );
    }
  } catch (error) {
    showErrorToast(error.message);
  }
}

export { handleRenderQuote };
