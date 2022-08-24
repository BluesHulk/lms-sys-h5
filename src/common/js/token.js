const storages = 'sessionStorage'
export function getToken() {
  // debugger
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.getItem('token')
    } else if ('sessionStorage' === storages) {
      return sessionStorage.getItem('token')
    } else {
      return localStorage.getItem('token')
    }
  } else {
    return localStorage.getItem('token')
  }
}

/**
 * @description 存储token
 * @param token
 * @returns {void|*}
 */
export function setToken(token) {
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.setItem('token', token)
    } else if ('sessionStorage' === storages) {
      return sessionStorage.setItem('token', token)
    }else {
      return localStorage.setItem('token', token)
    }
  } else {
    return localStorage.setItem('token', token)
  }
}

/**
 * @description 移除token
 * @returns {void|Promise<void>}
 */
export function removeToken() {
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.removeItem('token')
    } else if ('sessionStorage' === storages) {
      return sessionStorage.clear()
    } else {
      return localStorage.removeItem('token')
    }
  } else {
    return localStorage.removeItem('token')
  }
}


export function getRefreshToken() {
  // debugger
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.getItem('refresh_token')
    } else if ('sessionStorage' === storages) {
      return sessionStorage.getItem('refresh_token')
    } else {
      return localStorage.getItem('refresh_token')
    }
  } else {
    return localStorage.getItem('refresh_token')
  }
}

/**
 * @description 存储refresh_token
 * @param refresh_token
 * @returns {void|*}
 */
export function setRefreshToken(refresh_token) {
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.setItem('refresh_token', refresh_token)
    } else if ('sessionStorage' === storages) {
      return sessionStorage.setItem('refresh_token', refresh_token)
    }else {
      return localStorage.setItem('refresh_token', refresh_token)
    }
  } else {
    return localStorage.setItem('refresh_token', refresh_token)
  }
}

/**
 * @description 移除refresh_token
 * @returns {void|Promise<void>}
 */
export function removeRefreshToken() {
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.removeItem('refresh_token')
    } else if ('sessionStorage' === storages) {
      return sessionStorage.clear()
    } else {
      return localStorage.removeItem('refresh_token')
    }
  } else {
    return localStorage.removeItem('refresh_token')
  }
}



export function getMobile() {
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.getItem('mobile')
    } else if ('sessionStorage' === storages) {
      return sessionStorage.getItem('mobile')
    } else {
      return localStorage.getItem('mobile')
    }
  } else {
    return localStorage.getItem('mobile')
  }
}

/**
 * @description 存储mobile
 * @param mobile
 * @returns {void|*}
 */
export function setMobile(mobile) {
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.setItem('mobile', mobile)
    } else if ('sessionStorage' === storages) {
      return sessionStorage.setItem('mobile', mobile)
    }else {
      return localStorage.setItem('mobile', mobile)
    }
  } else {
    return localStorage.setItem('mobile', mobile)
  }
}

/**
 * @description 移除mobile
 * @returns {void|Promise<void>}
 */
export function removeMobile() {
  if (storages) {
    if ('localStorage' === storages) {
      return localStorage.removeItem('mobile')
    } else if ('sessionStorage' === storages) {
      return sessionStorage.clear()
    } else {
      return localStorage.removeItem('mobile')
    }
  } else {
    return localStorage.removeItem('mobile')
  }
}
