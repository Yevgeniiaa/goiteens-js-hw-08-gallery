const form = document.getElementById('contact-form');
const list = document.getElementById('contact-list');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
let editId = null;

function render() {
  list.innerHTML = '';
  contacts.forEach((contact, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${contact.firstName} ${contact.lastName}</strong><br>
      📞 ${contact.phone} <br>
      📧 ${contact.email} <br>
      <button onclick="editContact(${index})">Редагувати</button>
      <button onclick="deleteContact(${index})">Видалити</button>
    `;
    list.appendChild(li);
  });
}

function saveToLocalStorage() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const contact = {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim(),
  };

  if (editId !== null) {
    contacts[editId] = contact;
    editId = null;
  } else {
    contacts.push(contact);
  }

  form.reset();
  saveToLocalStorage();
  render();
});

window.deleteContact = function (index) {
  if (confirm('Ви впевнені, що хочете видалити цей контакт?')) {
    contacts.splice(index, 1);
    saveToLocalStorage();
    render();
  }
};

window.editContact = function (index) {
  const contact = contacts[index];
  form.firstName.value = contact.firstName;
  form.lastName.value = contact.lastName;
  form.phone.value = contact.phone;
  form.email.value = contact.email;
  editId = index;
};

render();
