import { useState } from "react";

function Button() {
  const [state, setState] = useState(0);

  return (
    <div>
      <button
        className="shared-btn text-sky-400"
        onClick={() => setState((s) => s + 1)}
      >
        remote Click me: {state}
      </button>
    </div>
  );
}

export default Button;
