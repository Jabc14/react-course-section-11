export const Hijo = ({ numero, incrementar }) => {
  console.log("  Me generé solo una vez :)  ");

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
};
