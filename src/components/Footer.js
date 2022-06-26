import { Link } from 'react-router-dom' //it doesnt reload when it goes to another pages

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2022</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer