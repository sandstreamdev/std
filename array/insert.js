export default index =>
  item =>
  ([...xs]) => {
    xs.splice(index, 0, item);

    return xs;
  };
