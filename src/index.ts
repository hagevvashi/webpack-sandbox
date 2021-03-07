const appElement = document.getElementById("app");

if (appElement === null) {
  throw new Error("there is no \"#app\" element in the document");
}

appElement.innerHTML = `
  <section>
    <h1>Hello Page</h1>
    <div>Example</div>
  </section>
`;