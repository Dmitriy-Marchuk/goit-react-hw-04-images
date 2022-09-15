const API_KEY = '28343249-1460158105f561498120f2a7a';
const amountRow = 12;

const getFetchCollection = async ({ searchName }, currentPage) => {
  return await fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${amountRow}`
  )
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw new Error(error);
    });
};

export default getFetchCollection;
