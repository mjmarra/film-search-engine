import React from "react";

export default function Pagination({ setPageNumber, pageNumber }) {
	function changePage(value) {
		window.scrollTo(0, 0);
		setPageNumber(value);
	}

	function changePageBack() {
		window.scrollTo(0, 0);
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		} else {
			setPageNumber(pageNumber);
		}
	}

	function changePageForth() {
		window.scrollTo(0, 0);
		setPageNumber(pageNumber + 1);
	}

	return (
		<nav className="fixed-bottom mr-4" aria-label="Page navigation example">
			<ul className="pagination justify-content-end">
				<li onClick={() => changePage(1)} className="page-item">
					<span className="page-link" aria-label="Previous">
						<span aria-hidden="true">&lt;</span>
					</span>
				</li>
				<li onClick={() => changePageBack()} className="page-item">
					<span className="page-link" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</span>
				</li>
				<li onClick={() => changePage(pageNumber)} className="page-item">
					<span className="page-link">{pageNumber}</span>
				</li>
				<li onClick={() => changePageForth()} className="page-item">
					<span className="page-link" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</span>
				</li>
			</ul>
		</nav>
	);
}
