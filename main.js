 window.addEventListener('DOMContentLoaded', (event) => {
     // Get form elements
     const form = document.getElementById('myForm');
     const nameInput = document.getElementById('name');
     const ageInput = document.getElementById('age');
     const emailInput = document.getElementById('email');
     const message = document.getElementById('message');
     const table = document.getElementById('dataTable');
     message.style.color = "red";

     // Real-time validation for name
     nameInput.addEventListener('input', function() {
         const nameValue = nameInput.value.trim();
         const nameRegex = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\sA-Za-z]+$/;
         if (!nameRegex.test(nameValue)) {
             nameInput.classList.add('invalid');
             message.textContent = 'Name should only contain Arabic and English characters.';
         } else {
             nameInput.classList.remove('invalid');
             message.textContent = '';
         }
     });

     // Real-time validation for age
     ageInput.addEventListener('input', function() {
         const ageValue = ageInput.value.trim();
         if (ageValue !== '') {
             if (isNaN(ageValue) || ageValue < 0 || ageValue > 100) {
                 ageInput.classList.add('invalid');
                 message.textContent = 'Age should be a number just and the number is between 0 and 100.';
             } else {
                 ageInput.classList.remove('invalid');
                 message.textContent = '';
             }
         }
     });

     // Real-time validation for email
     emailInput.addEventListener('input', function() {
         const emailValue = emailInput.value.trim();
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(emailValue)) {
             emailInput.classList.add('invalid');
             message.textContent = 'Please enter a valid email address.';
         } else {
             emailInput.classList.remove('invalid');
             message.textContent = '';
         }
     });

     // Add event listener to form on submit
     form.addEventListener('submit', function(event) {
         event.preventDefault(); // Prevent form submission

         // Validate name
         const nameValue = nameInput.value.trim();
         if (nameValue === '') {
             nameInput.classList.add('invalid');
             message.textContent = 'Please enter a name.';
             return;
         }
         const nameRegex = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\sA-Za-z]+$/;
         if (!nameRegex.test(nameValue)) {
             nameInput.classList.add('invalid');
             message.textContent = 'Name should only contain Arabic and English characters.';
         }

         // Validate age
         const ageValue = ageInput.value.trim();
         if (ageValue === '') {
             ageInput.classList.add('invalid');
             message.textContent = 'Please enter the age.';
             return;
         }
         if (isNaN(ageValue)) {
             ageInput.classList.add('invalid');
             message.textContent = 'Age should be a number.';
             return;
         }
         const age = parseInt(ageValue, 10);
         if (age < 0 || age > 100) {
             ageInput.classList.add('invalid');
             message.textContent = 'Age should be between 0 and 100.';
             return;
         }

         // Validate email
         const emailValue = emailInput.value.trim();
         if (emailValue === '') {
             emailInput.classList.add('invalid');
             message.textContent = 'Please enter an email address.';
             return;
         }
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(emailValue)) {
             emailInput.classList.add('invalid');
             message.textContent = 'Please enter a valid email address.';
             return;
         }

         // Form is valid, add the information to the table
         const newRow = table.insertRow(table.rows.length);
         const nameCell = newRow.insertCell(0);
         const ageCell = newRow.insertCell(1);
         const emailCell = newRow.insertCell(2);
         nameCell.textContent = nameValue;
         ageCell.textContent = ageValue;
         emailCell.textContent = emailValue;

         // Clear form inputs
         nameInput.value = '';
         ageInput.value = '';
         emailInput.value = '';
         message.textContent = '';

         // Remove invalid class from inputs
         nameInput.classList.remove('invalid');
         ageInput.classList.remove('invalid');
         emailInput.classList.remove('invalid');
     });

     // Add event listener to reset button
     const resetButton = document.getElementById('resetButton');
     resetButton.addEventListener('click', function() {
         form.reset();
         message.textContent = '';
         nameInput.classList.remove('invalid');
         ageInput.classList.remove('invalid');
         emailInput.classList.remove('invalid');
     });
 });