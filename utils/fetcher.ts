export const fetchData = async (uri: string, data: object) => {
  await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return `Something Went Wrong! ${err}`;
    });
};
