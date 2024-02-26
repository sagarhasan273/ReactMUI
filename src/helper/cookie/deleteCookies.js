export function deleteCookie(name) {
    document.cookie = `${name}=; expires=${new Date().toUTCString()}; path=/;`;
  }