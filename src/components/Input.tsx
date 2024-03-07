import { InputProp } from "../utils/Types";

export default function Input({ setIsAvailable }: InputProp) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Setting isAvailable to true
    setIsAvailable((prev) => !prev);
  };

  return (
    <>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <button>Enhance</button>
      </form>
    </>
  );
}
