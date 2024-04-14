export function Pages({ page, handleClick }) {
  function handleClickAndScrollTop() {
    handleClick();
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button
        className="border text-white p-3 hover:bg-slate-500"
        onClick={handleClickAndScrollTop}
      >
        {page}
      </button>
    </>
  );
}
