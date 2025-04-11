import { refs } from '../utils/refs.js';
import { subscriptionsService } from '../services/services.js';
import { showErrorToast } from '../utils/utils.js';

async function handleSubscription(event) {
  // collect form data
  // validate entered email
  // post email
  event.preventDefault();
  subscriptionsService.getFormData();
  subscriptionsService.verifyData();
}

export { handleSubscription };
