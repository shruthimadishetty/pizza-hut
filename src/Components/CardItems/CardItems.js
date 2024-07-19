import React, { useEffect, useState } from 'react';
import './CardItems.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const CardItems = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change this value to adjust items per page

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch("https://api.pizzahut.io/v1/content/products?sector=in-1&locale=en-in&type=promo");
        const apiData = await response.json();
        setData(apiData);
        setLoader(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchApi();
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className='card-container'>
        <h1 style={{ textAlign: "center" }}>Pizza-Hut Items</h1>
        {loader ? <h1 style={{ textAlign: "center" }}>Loading....</h1> :
          <>
            <div className="image-container">
              {currentItems.map((item, index) => (
                <div key={index} className="image-item">
                  <img src={item.img} alt={item.desc} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="button-container">
                    <button>Add</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={index + 1 === currentPage ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        }
      </div>
      <Footer />
    </>
  );
};

export default CardItems;
