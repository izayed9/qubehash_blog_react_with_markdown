import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from './pagination.module.scss';

interface Props {
    currentPage: number;
    totalPages: number;
    handleNextPage: (page: number) => void;
    handlePrevPage: (page: number) => void;
  }

  const Pagination: React.FC<Props> = ({
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage
  }) => {
    return (
      <div className={styles.paginationButtonWrapper}>
        <button
          onClick={() => handlePrevPage(currentPage)}
          disabled={currentPage === 1}
        >
         <span><BiChevronLeft /></span>
        </button>

        <span >
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handleNextPage(currentPage)}
          disabled={currentPage === totalPages}
        ><BiChevronRight /></button>
      </div>
    );
  };

//   Pagination.propTypes = {
//     currentPage: PropTypes.number.isRequired,
//     totalPages: PropTypes.number.isRequired,
//     handlePrevPage: PropTypes.func.isRequired,
//     handleNextPage: PropTypes.func.isRequired
//   };

  export default Pagination;
