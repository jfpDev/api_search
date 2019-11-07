//const input = form.elements.searchInput;
const input = document.forms['search'];
//input.addEventListener('focus', () => alert('focused'), false);
input.searchInput.value = 'Search Here';

input.searchInput.addEventListener('focus', function(){
  if (input.searchInput.value==='Search Here') {
    input.searchInput.value = ''
  }
}, false);

input.searchInput.addEventListener('blur', function(){
  if(input.searchInput.value === '') {
    input.searchInput.value = 'Search Here';
  }
}, false);

input.searchInput.addEventListener('submit', search, false);

function search(){
  alert('Submitted');
}
