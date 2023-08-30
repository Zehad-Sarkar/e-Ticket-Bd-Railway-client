import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="border-t-4 border-green-600">
      <div className="grid grid-cols-3 mt-8 mb-6">
        <div className="flex gap-2 ml-8">
          <img src={logo} alt="" className="w-16 h-16" />
          <div>
            <h3 className="text-3xl font-semibold">Bangldesh Railway</h3>
            <p>নিরাপদ . আরামদায়ক . সাশ্রয়ী</p>
          </div>
        </div>
        <div>
          <a href="#">Tarms and Condition</a> | <a href="#">Privacy Policy</a>
        </div>
        <div>
          <p>Powered by </p>
          <p className="text-2xl font-medium">Shohoz-Synesis-Vincen JV</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
