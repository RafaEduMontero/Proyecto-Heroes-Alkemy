import {Fragment, useContext} from 'react';
//ReactPaginate
import ReactPaginate from 'react-paginate';
//Context
import { HomeContext } from '../context/homeContext';
//Helpers
import helperPaginate from '../helpers/helpersPaginate';

const Paginate = () => {
    const {heroes,currentPage,setCurrentPage} = useContext(HomeContext);
    const {paginate} = helperPaginate;
    const helpers = paginate(heroes,currentPage,setCurrentPage)
    const {currentHero,pageCount,handlePageClick} = helpers;

    return (
        <Fragment>
            <div className="row">
                {currentHero}
            </div>
            <div className="row d-flex justify-content-center align-items-end">
                <nav className="pagination pagination-sm">
                    <ReactPaginate
                        previousLabel={""}
                        nextLabel={""}
                        breakLabel={"..."}
                        breakClassName={"page-link"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        pageLinkClassName={"page-link bg-info text-white"}
                        containerClassName={"pagination rounded-circle pt-3"}
                        disabledClassName={"page-item disabled"}
                        activeClassName={"page-item active bg-danger"}
                    />
                </nav>
            </div>
        </Fragment>
    )
}

export default Paginate
