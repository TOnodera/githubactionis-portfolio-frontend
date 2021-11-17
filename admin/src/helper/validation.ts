const isEmail = (email: string) => {
  const pattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*[^.]@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
  return email.match(pattern);
};

export { isEmail };
