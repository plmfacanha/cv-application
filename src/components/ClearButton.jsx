export default function ClearButton({ isComplete, handleClear }) {
  return (
    <>
      <button
        className="btn btn-danger w-100"
        disabled={!isComplete}
        onClick={handleClear}
      >
        {isComplete ? "Clear" : "Loading.."}
      </button>
    </>
  );
}
