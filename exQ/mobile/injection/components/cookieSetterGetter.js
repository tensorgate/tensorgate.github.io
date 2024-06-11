export default class kookie {
  constructor(action, { key, value } = {}) {
    if (action === "set") {
      this.setCookie(key, value);
    } else if (action === "get") {
      return this.getCookie(key);
    } else if (action === "check") {
      return this.checkCookie(key);
    } else if (action === "delete") {
      this.deleteCookie(key);
    }
  }

  setCookie(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
  }

  getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let cookie of cookieArr) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  checkCookie(name) {
    return this.getCookie(name) !== null;
  }

  deleteCookie(name) {
    const date = new Date(0);
    document.cookie = `${name}=;expires=${date.toUTCString()};path=/`;
  }
}
