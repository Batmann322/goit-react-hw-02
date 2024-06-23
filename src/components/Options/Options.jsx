export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <section>
      <button onClick={() => updateFeedback("good")}>good</button>
      <button onClick={() => updateFeedback("neutral")}>neutral</button>
      <button onClick={() => updateFeedback("bad")}>bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </section>
  );
}
