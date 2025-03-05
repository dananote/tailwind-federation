function Button() {

  return (
      <details className="boot:dropdown">
          <summary className="boot:btn m-1">open or close</summary>
          <ul className="boot:menu boot:dropdown-content bg-base-100 boot:rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
          </ul>
      </details>
  );
}

export default Button;
