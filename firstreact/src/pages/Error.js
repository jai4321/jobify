import {Link} from 'react-router-dom';
import image from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={image} alt="Page Not Found" />
        <h3>Ohh! Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error