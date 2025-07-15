export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">YourLogo</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-600">All Products</a>
          <a href="#" className="hover:text-gray-600">Serum</a>
          <a href="#" className="hover:text-gray-600">sunscreem</a>
          <a href="#" className="hover:text-gray-600">Bundle</a>
        </nav>
        <button className="md:hidden">Menu</button>
      </div>
    </header>
  );
}