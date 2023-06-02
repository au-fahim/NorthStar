import logo from "/North_Star.png";
import ae_icon from "/payment_icons/american_express_icon.svg";
import mc_icon from "/payment_icons/master_card_icon.svg";
import pp_icon from "/payment_icons/paypal_icon.svg";
import vc_icon from "/payment_icons/visa_card_icon.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="main-wrapper">
        {/* Footer Container */}
        <div className="flex flex-col">
          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-2 justify-between py-6 md:py-10 border-b border-slate-300">
            {/* Application Logo & Short Intro */}
            <div className="col-span-2 flex flex-col gap-4 items-start pb-3 md:pb-0 md:pr-8">
              {/* APPLICATION LOGO */}
              <img src={logo} alt="North Star" />

              <p className="text-gray-500">
                Specializes in providing high-quality stylish products for your
                wardrobe
              </p>
            </div>

            {/* Additional Links & Support */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-2">
              <div className="flex flex-col gap-2">
                <strong className="uppercase pl-2">Shop</strong>
                <ul className="additionalLinks">
                  <li>All Collections</li>
                  <li>Winter Edition</li>
                  <li>Discount</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <strong className="uppercase pl-2">company</strong>
                <ul className="additionalLinks">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Affiliates</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <strong className="uppercase pl-2">Support</strong>
                <ul className="additionalLinks">
                  <li>FAQs</li>
                  <li>Cookie Policy</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <strong className="uppercase pl-2">Payment Methods</strong>
                <ul className="additionalLinks">
                  <li className="grid grid-cols-6 sm:grid-cols-4 gap-2">
                    <img src={mc_icon} alt="Master Card" className="w-10" />
                    <img src={vc_icon} alt="Visa Card" className="w-10" />
                    <img src={pp_icon} alt="Paypal" className="w-10" />
                    <img
                      src={ae_icon}
                      alt="American Express"
                      className="w-10"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="py-3 md:py-6 text-xs md:text-base mx-auto">
            <p>Copyright &copy;2023 North Star. All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
