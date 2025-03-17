import Navbar from './navbar'
import Footer from './footer'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">My Website</h1>
      </header>
      <main className="flex-1 p-4">
        {children}
      </main>
      <Footer />
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;