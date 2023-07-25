function calculateAge(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  function calculateMonth(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      month += 12;
    }
    return month;
  }
  
  function calculateDay(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var day = today.getDate() - birthDate.getDate();
    if (day < 0) {
      day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    return day;
  }
  
  document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var birthday = document.querySelector('#birthday').value;
  
  var age = calculateAge(birthday);
  var month = calculateMonth(birthday);
  var day = calculateDay(birthday);
  
  document.querySelector('#result').textContent = "Vous avez " + age + " ans, " + month + " mois et " + day + " jours.";
  });
  