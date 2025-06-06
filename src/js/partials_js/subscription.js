import { refs } from '../utils/refs.js';
import { subscriptionsService } from '../services/services.js';

async function handleSubscription(event) {
  event.preventDefault();
  // collect form data

  subscriptionsService.getFormData();
  // validate entered email
  if (subscriptionsService.verifyData()) {
    // post email
    subscriptionsService.postEmail();
  }
}

function setFooterYear() {
  const year = new Date().getFullYear();
  refs.footerYear.textContent = `©${year}`;
}

export { handleSubscription, setFooterYear };
