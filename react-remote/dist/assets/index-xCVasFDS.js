import { importShared } from './__federation_fn_import-Cs8iVUFL.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CvJTHeKY.js';
import { r as requireReactDom } from './index-eoEhLOdg.js';

var client = {};

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client;
	hasRequiredClient = 1;
	var m = requireReactDom();
	{
	  client.createRoot = m.createRoot;
	  client.hydrateRoot = m.hydrateRoot;
	}
	return client;
}

var clientExports = requireClient();

const reactLogo = "/assets/react-CHdo91hT.svg";

const viteLogo = "/vite.svg";

const {useState} = await importShared('react');
function App() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://vite.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
        "count is ",
        count
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}

const {StrictMode} = await importShared('react');
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
