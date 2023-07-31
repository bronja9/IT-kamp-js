function isValidPassword(password, username) {
  let password = password.toUpperCase();
  let username = username.toUpperCase();

  if (
    password.length > 7 &&
    !password.include(username) &&
    !password.include(" ")
  ) {
    return true;
  } else {
    return false;
  }
}
