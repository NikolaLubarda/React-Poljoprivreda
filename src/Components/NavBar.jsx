export default function Navbar() {
  return (
    <nav className="bg-white w-full fixed top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-center items-center py-4">
        <div className=" mr-20 text-green-600">
          <h1 className="text-xl font-semibold ">POLJOPRIVREDA</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Pocetna
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              O nama
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Prodajni program
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Prodaja
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Projekti
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline hover:text-green-600 hover:no-underline"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
