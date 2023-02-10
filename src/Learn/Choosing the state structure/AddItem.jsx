export default function AddItem({ onAddItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <>
      <form>
        <input placeholder="Add Item" name="item" />
        <button type="submit" onSubmit={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
}
