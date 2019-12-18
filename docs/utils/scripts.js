export const scrollTo = id => {
  return `var element = document.getElementById('${id}');
  element.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
  element.classList.add('selected');`;
};
