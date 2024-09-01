document.getElementById('appLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'https://your-app-store-link.com';
});

document.getElementById('instagramLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://www.instagram.com/your-instagram-handle', '_blank');
});

document.getElementById('facebookLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://www.facebook.com/your-facebook-page', '_blank');
});

document.getElementById('whatsappLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://wa.me/918092666875', '_blank');
});

function filterContacts() {
  let input = document.getElementById('search');
  let filter = input.value.toUpperCase();
  let ul = document.getElementById('contactList');
  let li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
      let h2 = li[i].getElementsByTagName('h2')[0];
      let txtValue = h2.textContent || h2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
