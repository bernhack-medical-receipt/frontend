import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
export const PharmacistHelp = () => {
    return (
        <>
            <Link to={"/pharmacist/menu"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h2>Help</h2>
                <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                </div>
            </Container>
        </>
    );
}