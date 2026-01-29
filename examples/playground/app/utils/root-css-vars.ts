function setRootCssVar(name: string, value: string): void {
  document.documentElement.style.setProperty(name, value);
}

export { setRootCssVar };
