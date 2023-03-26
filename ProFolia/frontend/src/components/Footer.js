import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#845bb3",
				textAlign: "center",
				marginTop: "-50px", 
                marginBottom: "20px"}}>
		Discover Your Dream Job with Ease on Profolia
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">ProFolia</FooterLink>
			<FooterLink href="#">Our Team</FooterLink>
			<FooterLink href="#">Montreal</FooterLink>
			<FooterLink href="#">Socials</FooterLink>
		</Column>
 		<Column>
 			<Heading>Social Media</Heading>
 			<FooterLink href="#">
 			<i className="fab fa-facebook-f">
 				<span style={{ marginLeft: "18px", fontFamily: "sans-serif" }}>
 				Facebook
 				</span>
 			</i>
 			</FooterLink>
 			<FooterLink href="#">
 			<i className="fab fa-instagram">
 				<span style={{ marginLeft: "12px", fontFamily: "sans-serif" }}>
 				Instagram
 				</span>
 			</i>
 			</FooterLink>
 			<FooterLink href="#">
 			<i className="fab fa-twitter">
 				<span style={{ marginLeft: "10px", fontFamily: "sans-serif" }}>
 				Twitter
 				</span>
 			</i>
 			</FooterLink>
 			<FooterLink href="#">
 			<i className="fab fa-youtube">
 				<span style={{ marginLeft: "10px", fontFamily: "sans-serif" }}>
 				Youtube
 				</span>
 			</i>
 			</FooterLink>
			{/* <div className="col-sm-6">
				<ul className="social-media-icons">
  					<li>
						<a href="#">
							<i className="fab fa-facebook"></i>
						</a>
					</li>
  					<li>
						<a href="#">
							<i className="fab fa-twitter"></i>
						</a>
					</li>
 				 	<li>
						<a href="#">
							<i className="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
			</div> */}
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;


