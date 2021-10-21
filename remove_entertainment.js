var elements = document.querySelectorAll('[data-tracking-action="entretenimento"]')
var mainPosts = document.querySelectorAll('.theme-entretenimento')
var allPosts = mainPosts.concat(elements);
allPosts.forEach((element) => {
  element.parentElement.removeChild(element);
});

var column = document.querySelector('.column-container-entretenimento');
column.parentElement.removeChild(column);
