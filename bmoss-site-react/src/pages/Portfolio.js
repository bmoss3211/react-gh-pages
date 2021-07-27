import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfolioView from "../components/PortfolioView";

function Portfolio() {
  const [portfolio, setPortfolios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfolioPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/portfolio").then((response) => {
      if (mounted) {
        setPortfolios(response.data);
      }
    });
    return () => (mounted = false);
  }, [portfolio]);

  const indexOfLastPortfolio = currentPage * portfolioPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - portfolioPerPage;
  const currentPortfolio = portfolio.slice(
    indexOfFirstPortfolio,
    indexOfLastPortfolio
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Portfolio - Brandon Clarke-Moss Portfolio Website</title>
        <meta
          name="description"
          content="Brandon Clarke-Moss Portfolio Website Portfolio Page"
        />
      </Helmet>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Portfolio" />
          {<PortfolioView portfolio={currentPortfolio} />}
          {!(portfolio.length > portfolioPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={portfolioPerPage}
              totalItems={portfolio.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
