import React from 'react';
import PropTypes from 'prop-types';
import './TransactionTiltle.scss';

const TransactionTitle = ({ title, amount, amountDescr }) => {
  return (
    <section className="titleSection">
      <div className="titleSection-content-wrapper">
        <h3 className="titleSection-title">{title}</h3>
        <p className="titleSection-amount">{amount}</p>
        <p className="titleSection-amount-description">{amountDescr}</p>
      </div>
    </section>
  );
};

TransactionTitle.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  amountDescr: PropTypes.string,
};

export default TransactionTitle;