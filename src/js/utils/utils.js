import iziToast from 'izitoast';

function showErrorToast(message) {
  return iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    transitionIn: 'fadeInDown',
    timeout: 3000,
    close: true,
  });
}

function showSuccessToast(message) {
  return iziToast.success({
    title: 'Success',
    message: message,
    position: 'topRight',
    transitionIn: 'fadeInDown',
    timeout: 3000,
    close: true,
  });
}

function formValidation(ratingSelected, email, comment) {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!ratingSelected) {
    showErrorToast('Please select a rating before submitting.');
    return false;
  }
  if (!email || !emailPattern.test(email)) {
    showErrorToast('Please enter a valid email address.');
    return false;
  }
  if (!comment) {
    showErrorToast('Please enter a comment.');
    return false;
  }
  return true;
}

function shortenText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength-1) + '...';
  }
  return text;
}

export { showErrorToast, showSuccessToast, formValidation, shortenText };
