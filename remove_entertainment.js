var elements = document.querySelectorAll('[data-tracking-action="entretenimento"]')
elements.forEach((element) => {
  element.parentElement.removeChild(element);
});

var column = document.querySelector('.column-container-entretenimento');
column.parentElement.removeChild(column);