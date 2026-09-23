const USER_STORAGE_KEY = "mindsafeUser";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveUser(user) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

function initials(name = "MS") {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("") || "MS"
  );
}

function setFormMessage(message, isError = false) {
  const element = document.querySelector(".form-message");
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function validateRequiredFields(form) {
  const requiredFields = [...form.querySelectorAll("[required]")];
  const emptyField = requiredFields.find((field) =>
    field.type === "checkbox" ? !field.checked : !field.value.trim(),
  );
  if (emptyField) {
    emptyField.focus();
    setFormMessage("Preencha os campos obrigatórios.", true);
    return false;
  }
  return true;
}

function setupPasswordToggles() {
  document.querySelectorAll(".toggle-password").forEach((button) =>
    button.addEventListener("click", () => {
      const input = document.querySelector(`#${button.dataset.target}`);
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      button.textContent = isPassword ? "◉" : "◌";
      button.setAttribute(
        "aria-label",
        isPassword ? "Ocultar senha" : "Mostrar senha",
      );
    }),
  );
}

function setupLogin() {
  const form = document.querySelector("#login-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateRequiredFields(form)) return;
    const user = getStoredUser();
    const email = form.querySelector("#login-email").value.trim();
    saveUser({ ...user, email });
    setFormMessage("Login demonstrativo realizado. Redirecionando...");
    window.setTimeout(() => {
      window.location.href = "home.html";
    }, 700);
  });
}

function setupRegistration() {
  const form = document.querySelector("#register-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateRequiredFields(form)) return;
    const password = form.querySelector("#register-password").value;
    const confirmation = form.querySelector(
      "#register-password-confirmation",
    ).value;
    if (password.length < 6) {
      setFormMessage("A senha deve ter pelo menos 6 caracteres.", true);
      return;
    }
    if (password !== confirmation) {
      setFormMessage("As senhas precisam ser iguais.", true);
      return;
    }
    const user = {
      name: form.querySelector("#register-name").value.trim(),
      email: form.querySelector("#register-email").value.trim(),
      phone: form.querySelector("#register-phone").value.trim(),
      city: form.querySelector("#register-city").value.trim(),
      contact: form.querySelector("#register-contact").value,
    };
    saveUser(user);
    setFormMessage("Cadastro concluído. Abrindo seu perfil...");
    window.setTimeout(() => {
      window.location.href = "perfil.html";
    }, 700);
  });
}

function fillProfile(user) {
  const form = document.querySelector("#profile-form");
  if (!form) return;
  form.querySelector("#profile-name").value = user.name || "";
  form.querySelector("#profile-email").value = user.email || "";
  form.querySelector("#profile-phone").value = user.phone || "";
  form.querySelector("#profile-city").value = user.city || "";
  form.querySelector("#profile-contact").value = user.contact || "email";
  document.querySelector("#profile-name-heading").textContent =
    user.name || "Seu perfil";
  document.querySelector("#profile-email-heading").textContent =
    user.email || "Adicione seu e-mail";
  document.querySelector("#profile-avatar").textContent = initials(user.name);
}

function setupProfile() {
  const form = document.querySelector("#profile-form");
  if (!form) return;
  const user = getStoredUser();
  fillProfile(user);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateRequiredFields(form)) return;
    const updatedUser = {
      ...user,
      name: form.querySelector("#profile-name").value.trim(),
      email: form.querySelector("#profile-email").value.trim(),
      phone: form.querySelector("#profile-phone").value.trim(),
      city: form.querySelector("#profile-city").value.trim(),
      contact: form.querySelector("#profile-contact").value,
    };
    saveUser(updatedUser);
    fillProfile(updatedUser);
    setFormMessage("Perfil atualizado com sucesso.");
  });
  document.querySelector("#logout-button").addEventListener("click", () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    window.location.href = "login.html";
  });
}

setupPasswordToggles();
setupLogin();
setupRegistration();
setupProfile();
