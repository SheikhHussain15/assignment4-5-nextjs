
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-sans tracking-tight bg-[url('/image/bg-1.jpg')] bg-opacity-80 bg-fixed bg-center bg-cover font-semibold px-6 lg:px-10 pt-12 pb-6 mt-10">
      {/* Main Footer Content */}
      <div className="flex flex-wrap justify-between gap-10">
        {/* About Us Section */}
        <div className="max-w-md">
          <h4 className="text-amber-500 text-xl lg:text-2xl mb-4">ABOUT US</h4>
          <p className="text-white leading-relaxed text-sm lg:text-base">
            We welcome you to explore our taste of the world, in continental and
            Chinese delights and that&apos;s even before you get to the variety and
            excellence, of our barbecue grill.
          </p>
          <ul className="mt-6 flex space-x-4">
            <li>
              <Link href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-6 lg:w-8 h-6 lg:h-8" viewBox="0 0 49.652 49.652">
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                </svg>
              </Link>
            </li>
            {/* Add other social links here */}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="min-w-[140px]">
          <h4 className="text-amber-500 text-xl lg:text-2xl mb-4">CONTACT US</h4>
          <ul className="space-y-4">
            <li>
              <Link href="javascript:void(0)" className="hover:text-white text-white text-sm">
                Client Portal
              </Link>
            </li>
            <li>
              <Link href="javascript:void(0)" className="hover:text-white text-white text-sm">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Work Time Section */}
        <div className="min-w-[140px]">
          <h4 className="text-amber-500 text-xl lg:text-2xl mb-4">WORK TIME</h4>
          <ul className="space-y-4">
            <li>
              <span className="text-white text-sm">Monday-Sunday: 5pm-1am</span>
            </li>
            <button className="bg-amber-300 text-black px-3 py-2 text-sm font-semibold rounded">
              ORDER ONLINE
            </button>
          </ul>
        </div>

        {/* Locations Section */}
        <div className="min-w-[140px]">
          <h4 className="text-amber-500 text-xl lg:text-2xl mb-4">LOCATIONS</h4>
          <ul className="space-y-1">
            <li>
              <Link href="javascript:void(0)" className="hover:text-white text-white text-sm">
                DO DARYA
              </Link>
            </li>
            <li>
              <Link href="javascript:void(0)" className="hover:text-white text-white text-sm">
                SHAHEED-E-MILLAT
              </Link>
            </li>
            <li>
              <Link href="javascript:void(0)" className="hover:text-white text-white text-sm">
                HAIDERABAD
              </Link>
            </li>
            <li>
              <Link href="javascript:void(0)" className="hover:text-white text-white text-sm">
                HIGHWAY
              </Link>
            </li>
            <li>
              <Link href="javascript:void(0)" className="hover:text-white text-white text-sm">
                LAHORE
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-10 mb-6 border-gray-300" />

      {/* Footer Bottom Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <ul className="flex space-x-4">
          <li>
            <Link href="javascript:void(0)" className="hover:text-white text-white">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="javascript:void(0)" className="hover:text-white text-white">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="javascript:void(0)" className="hover:text-white text-white">
              Security
            </Link>
          </li>
        </ul>
        <p className="text-white text-sm">© ReadymadeUI. All rights reserved.</p>
      </div>
    </footer>
  );
}
