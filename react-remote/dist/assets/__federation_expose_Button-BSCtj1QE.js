import { importShared } from './__federation_fn_import-Cs8iVUFL.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CvJTHeKY.js';

const {useState} = await importShared('react');

function Button() {
  const [state, setState] = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: "shared-btn text-sky-400",
      onClick: () => setState((s) => s + 1),
      children: [
        "remote Click me: ",
        state
      ]
    }
  ) });
}

export { Button as default };
