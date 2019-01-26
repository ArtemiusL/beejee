export default () => {
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    return true;
  }

  return false;
};
