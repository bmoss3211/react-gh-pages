import React from "react";
import PF from './PF';

function PortfolioView({ portfolio }) {
  return (
    <div className="row mt-30-reverse">
      {portfolio.map(pf => (
        <div className="col-lg-4 col-md-6 col-12 mt-30" key={pf.id} >
          <PF content={pf} />
        </div>
      ))}
    </div>
  );
}

export default PortfolioView;