const getConvers = async () => {
  const data = await fetch(
    `https://617b0784cb1efe001701015c.mockapi.io/convers`,
    { method: "GET" }
  );
  const jn = await data.json();
  return jn;
};

export { getConvers };
