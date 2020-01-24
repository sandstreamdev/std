export default index => ([...xs]) => {
  xs.splice(index, 1);

  return xs;
};
