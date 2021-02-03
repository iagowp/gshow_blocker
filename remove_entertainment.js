var elements = document.querySelectorAll('[data-tracking-action="entretenimento"]')
elements.forEach((element) => {
  element.parentElement.removeChild(element);
});
