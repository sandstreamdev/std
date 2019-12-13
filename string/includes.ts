export default (search: string) => (text: string) =>
  text.indexOf(search) !== -1;
