import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export const PharmacistHelp = () => {
    return (
        <>
            <Link to={"/pharmacist/menu"}><Button variant="primary" type="submit">Back</Button></Link>

        </>
    );
}