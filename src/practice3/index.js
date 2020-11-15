const url = "https://v1.jinrishici.com/all.json";
export const getPoetry = async function() {
    return fetch(url)
    .then((response) => response.json())
    .then((data) =>
      ["origin", "author", "content"].map((item) => data[item])
    )
    .catch((error) => console.log(error));
};
