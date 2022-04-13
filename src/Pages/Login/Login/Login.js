import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	// const navigate = useNavigate();
	const handleSubmitButton = (event) => {
		event.preventDefault();
		const emailValue = emailRef.current.value;
		const passwordValue = passwordRef.current.value;
		console.log(emailValue, passwordValue);
	};
	// const handleSignup = () => {
	// 	navigate("/signup");
	// };
	return (
		<div className="container w-50 mx-auto">
			<h1 className="text-center text-primary mt-3">please login</h1>
			<Form onSubmit={handleSubmitButton}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						ref={emailRef}
						type="email"
						placeholder="Enter email"
						required
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						ref={passwordRef}
						type="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<p>
					New to geneious car? <Link to="/signup">please register</Link>
				</p>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Login;
<h1>please login</h1>;
