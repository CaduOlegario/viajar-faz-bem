import { Container } from "./style";

export function Paginate({ setCurrentPage, currentPage, disabled }) {
  let maxPages = 64;
  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage ? "square-effect active" : "square-effect"
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
  }

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginationRender = (
    <Container disabled={disabled}>
      <div className="flex-container">
        <div className="paginate-ctn">
          <div className="square-effect" onClick={prevPage}>
            {" "}
            &lsaquo;{" "}
          </div>
          {items}
          <div className="square-effect" onClick={nextPage}>
            {" "}
            &rsaquo;{" "}
          </div>
        </div>
      </div>
    </Container>
  );

  return paginationRender;
}
