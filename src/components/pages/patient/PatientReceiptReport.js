import { Container, Form , Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

export const PatientReceiptReport = () => {
    return (
        <>
        <Link to={"/patient/receipts"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h2>Report side effect</h2>
                <Form>
                    <h3>What was your side effect</h3>
                    <Form.Control as="textarea" rows="3" name="address" />


                    <h3>How severe would you rate your side effect</h3>

                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type={type}
                                id={`rate-1`}
                                label={`1`}
                            />
                            <Form.Check
                                type={type}
                                id={`rate-2`}
                                label={`2`}
                            />
                            <Form.Check
                                type={type}
                                id={`rate-3`}
                                label={`3`}
                            />
                            <Form.Check
                                type={type}
                                id={`rate-4`}
                                label={`4`}
                            />
                            <Form.Check
                                type={type}
                                id={`rate-5`}
                                label={`5`}
                            />


                        </div>
                    ))}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        </>
    );
}