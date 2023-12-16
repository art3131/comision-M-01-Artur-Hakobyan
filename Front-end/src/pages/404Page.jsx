import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
      <div>
          <Navbar/>
      <h1>404</h1>
      <p>Not found</p>
      <Link to="/">Go to home</Link>
        <Footer/>
    </div>
  );
}
export default NotFoundPage;