const SelectedModel = () => {
  return (
    <select class="form-select" aria-label="Default select example">
      <option value="0" selected>
        Gemini
      </option>
      <option value="1">OpenAI</option>
    </select>
  );
};

export default SelectedModel;
