const THEME_STORAGE_KEY = "freezetag-marketing-theme-option";

const get_theme = () => {
  let theme_setting = localStorage.getItem(THEME_STORAGE_KEY);
  if (!theme_setting) {
    theme_setting = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  return theme_setting;
};

const set_theme = () => {
  document.querySelector("html").setAttribute("data-theme-type", get_theme());
};

const toggle_storage = () => {
  const theme_setting = get_theme();
  if (theme_setting === "dark") {
    localStorage.setItem(THEME_STORAGE_KEY, "light");
  } else {
    localStorage.setItem(THEME_STORAGE_KEY, "dark");
  }
};

const theme_button_setup = () => {
  const button = document.querySelector(".header-theme-button");
  button.addEventListener("click", () => {
    toggle_storage();
    set_theme();
  });
};

// Initialize theme
set_theme();
theme_button_setup();
