function setRootCssVar(name: string, value: string): void {
  if (!import.meta.client) return;

  const root = document.documentElement;
  if (root.style.getPropertyValue(name) === value) return;

  root.style.setProperty(name, value);
}

export { setRootCssVar };
