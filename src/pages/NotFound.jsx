import { Link, useRouteError } from "react-router-dom";

const NotFound = () => { 
    const error = useRouteError()

    return(
        
        <div>
        404 Not Found
        {error.statusText || error.message}
        <Link className="btn btn-primary" to='/'>Volver al Home</Link>

        </div>
    )
 }
 export default NotFound;