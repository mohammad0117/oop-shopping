const fetchData = async () => {
  const res = await fetch("./data.json");
  const result = await res.json();
  return result;
};
export {fetchData}