/*
 * Comportamentos pequenos e opcionais: não há backend nem CRUD.
 * Os dados continuam estáticos no HTML; este script apenas melhora a
 * experiência de demonstração (ano no rodapé, filtro e feedback de formulário).
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-table-filter]").forEach((input) => {
    const table = document.querySelector(input.dataset.tableFilter);
    if (!table) return;
    input.addEventListener("input", () => {
      const term = input.value.toLowerCase().trim();
      table.querySelectorAll("tbody tr").forEach((row) => {
        row.hidden = !row.textContent.toLowerCase().includes(term);
      });
    });
  });

  document.querySelectorAll(".needs-validation").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
      } else {
        const feedback = form.querySelector("[data-form-feedback]");
        if (feedback) feedback.classList.remove("d-none");
      }
      form.classList.add("was-validated");
    });
  });
});
