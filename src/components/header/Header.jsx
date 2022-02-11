import "./Header.css";
const Header = ({ onClick }) => {
  return (
    <div className="header">
      <p className="header-paragraph">Teste front-end</p>
      <button className="button" onClick={onClick}>
        SALVAR
      </button>
    </div>
  );
};

export default Header;
