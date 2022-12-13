function submitForm(event) {
  event.preventDefault();
  const errorsLogin = [];
  const errorsPassword = [];
  const errorsPassword_repeat = [];
  const ans = document.querySelector(".ans").value;

  const formData = new FormData(document.querySelector("form"));
  const login = formData.get("login");
  const password = formData.get("password");
  const password_repeat = formData.get("password-repeat");
  if (!login) errorsLogin.push("Строка пустая");
  if (login.length < 3) errorsLogin.push("Логин слишком короткий");
  if (!login.match(/^[a-z]*$/i))
    errorsLogin.push("Только символы английского алфавита");
  showErrorlogin(errorsLogin);
  if (!password) errorsPassword.push("Строка пустая");
  if (password.length < 6)
    errorsPassword.push("Минимальная длина пароля - 6 символов");
  showErrorPas(errorsPassword);
  if (!password_repeat) errorsPassword_repeat.push("Строка пустая");
  if (password_repeat != password)
    errorsPassword_repeat.push("Введите тот же пароль!");
  showErrorPasRep(errorsPassword_repeat);
  if (!isEqual(ans)) alert("Вы робот! (・`ω´・)");
}
const showErrorlogin = (errors) =>
  (document.querySelector(".form__errorsLogin").innerHTML = errors[0] || "");
const showErrorPas = (errors) =>
  (document.querySelector(".form__errorsPassword").innerHTML = errors[0] || "");
const showErrorPasRep = (errors) =>
  (document.querySelector(".form__errorsPassword_repeat").innerHTML =
    errors[0] || "");
    
    