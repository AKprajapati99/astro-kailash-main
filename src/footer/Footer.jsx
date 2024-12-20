

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo and Social Links */}
        <div>
          <h1 className="text-lg font-bold mb-4">AstralVue</h1>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h2 className="font-bold mb-4">Product</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Features</a></li>
            <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-300">Case studies</a></li>
            <li><a href="#" className="hover:text-gray-300">Reviews</a></li>
            <li><a href="#" className="hover:text-gray-300">Updates</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact us</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">Culture</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="font-bold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Getting started</a></li>
            <li><a href="#" className="hover:text-gray-300">Help center</a></li>
            <li><a href="#" className="hover:text-gray-300">Server status</a></li>
            <li><a href="#" className="hover:text-gray-300">Report a bug</a></li>
            <li><a href="#" className="hover:text-gray-300">Chat support</a></li>
          </ul>
        </div>

        {/* Downloads Links */}
        <div>
          <h2 className="font-bold mb-4">Downloads</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">iOS</a></li>
            <li><a href="#" className="hover:text-gray-300">Android</a></li>
            <li><a href="#" className="hover:text-gray-300">Mac</a></li>
            <li><a href="#" className="hover:text-gray-300">Windows</a></li>
            <li><a href="#" className="hover:text-gray-300">Chrome</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        <p>
          Copyright © 2024 Astroguru | All Rights Reserved |
          <a href="#" className="hover:text-gray-300"> Terms and Conditions</a> |
          <a href="#" className="hover:text-gray-300"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
