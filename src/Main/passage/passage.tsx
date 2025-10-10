import "./passage.css";
export function Passage({
  initialState,
  inputRef,
  inputCharacters,
  handleInputChange,
}: {
  initialState: { char: string; wordState: string }[];
  inputRef: React.RefObject<HTMLInputElement | null>;
  inputCharacters: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <div className="paragraph">
        {initialState.map((item, index) => {
          return (
            <span key={`${index}-${item}`} className={item.wordState}>
              {item.char === " " ? "\u00A0" : item.char}
            </span>
          );
        })}
      </div>
      <input
        className="input"
        ref={inputRef}
        type="text"
        value={inputCharacters}
        onChange={handleInputChange}
      />
    </div>
  );
}
