import { Link } from "react-router-dom";
import { IoSearchOutline, IoHeartOutline, IoCartOutline, IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full flex flex-col bg-white shadow-md">

      {/* Topo - Logo + Busca + Ícones */}
      <div className="w-full flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">Digital Store</h1>

        {/* Barra de busca */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="bg-transparent w-full outline-none text-sm"
          />
          <IoSearchOutline size={20} className="text-gray-500" />
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-4 text-gray-700 text-2xl">
          <IoHeartOutline className="cursor-pointer" />
          <IoPersonOutline className="cursor-pointer" />
          <IoCartOutline className="cursor-pointer" />
        </div>
      </div>

      {/* Menu */}
      <nav className="w-full border-t">
        <ul className="flex gap-10 px-6 py-3 text-gray-600 font-medium">
          <li><Link to="/" className="hover:text-black">Home</Link></li>
          <li><Link to="/products" className="hover:text-black">Produtos</Link></li>
          <li><Link to="/categories" className="hover:text-black">Categorias</Link></li>
          <li><Link to="/myorders" className="hover:text-black">Meus pedidos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
