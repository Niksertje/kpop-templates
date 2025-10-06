const buttons = document.querySelectorAll('.download-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const template = button.dataset.template;
    let count = localStorage.getItem(template) || 0;
    count = parseInt(count) + 1;
    localStorage.setItem(template, count);
    document.getElementById(`count-${template}`).innerText = count;
    alert(`Download van ${template} gestart!`);
  });
});

buttons.forEach(button => {
  const template = button.dataset.template;
  const count = localStorage.getItem(template) || 0;
  document.getElementById(`count-${template}`).innerText = count;
});
