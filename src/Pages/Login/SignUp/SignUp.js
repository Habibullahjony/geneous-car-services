import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
	const nameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const handleSignup = (event) => {
		event.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		console.log(name, email, password);
	};
	return (
		<div className="container w-50 mx-auto">
			<h1 className="text-center text-primary mt-3">please login</h1>
			<Form onSubmit={handleSignup}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Your Name</Form.Label>
					<Form.Control
						ref={nameRef}
						type="text"
						placeholder="Enter name"
						required
					/>
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
					Already in use geneious car? <Link to="/login">please Login</Link>
				</p>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
};

export default SignUp;
