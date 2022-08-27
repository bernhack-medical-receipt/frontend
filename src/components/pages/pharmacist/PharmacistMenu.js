import { Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
export const PharmacistMenu = () => {
    return (
        <>
            <Container>
                <div>
                <Link to={"/pharmacist/patient_profile"}><Button variant="primary" type="submit">Back</Button></Link>
                </div>
                <div>
                <Link to={"/pharmacist/help"}><Button variant="primary" type="submit">Back</Button></Link>
                </div>
            </Container>

        </>
    );
}