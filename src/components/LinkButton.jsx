import {Link} from 'react-router-dom'

const LinkButton = (props) => {
    return (
        <Link
            className={"button " + props.color}
            to={props.path}
            onClick={props.onClick}
        >
            {props.text}
        </Link>
    )
}

export default LinkButton