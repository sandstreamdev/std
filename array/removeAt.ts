export default (index: number) => ([...xs]: any[]) => {
  xs.splice(index, 1);

  return xs;
};
