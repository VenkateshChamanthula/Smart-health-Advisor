function validateForm() {
  let age = document.forms["healthForm"]["age"].value;
  if (age < 1 || age > 120) {
    alert("Please enter a valid age.");
    return false;
  }
  return true;
}
