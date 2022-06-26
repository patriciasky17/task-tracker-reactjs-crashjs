import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log("Click");
    // }

    const location = useLocation();

    return (
    <header className="header">
        <h1>{title}</h1>
        {location.pathname === '/' && (
        <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
        />
        )}
    </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header

//35:12 https://www.youtube.com/watch?v=w7ejDZ8SWv8

// CSS in JS

// const Header = ({title}) => {
//     return (
//         <header>
//             <h1 style= {headingStyle}>{title}</h1>
            {/* <Button color="blue" text="Hello 2"/>
            <Button color="red" text="Hello 3"/> */}
//         </header>
//     )
// }

// const headingStyle = {
//     color: "red", 
//     backgroundColor: "black" 
// }

