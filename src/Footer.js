import '@fortawesome/fontawesome-free/css/all.min.css'; // package for footer
import './Footer.css'; // Import custom CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/SwanyWu/buy-or-rent-nl" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="swanywu@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a> */}
        {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
