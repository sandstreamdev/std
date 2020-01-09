export default (index: number) => (item: any) => ([...xs]: any[]) => {
  xs.splice(index, 0, item);

  return xs;
};
