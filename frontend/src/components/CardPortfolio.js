import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";

const CardPortfolio = ({ project }) => {
	return (
		<StyleCard>
			{/* Link - para o card ser clicável */}
			<Link to={`/portfolio/${project.slug}`}>
				<StyleContent>
					<Image src={project.image} alt="" />
					<StyleInfo>
						<h3>{project.title}</h3>
						<h4>{moment(project.createdAt).format("MMM. YYYY")}</h4>
						<p>{project.description}</p>
					</StyleInfo>
				</StyleContent>
			</Link>
		</StyleCard>
	);
};

const StyleCard = styled.div`
	min-height: 30vh;
	box-shadow: 0px 2px 10px rgba(240, 255, 0, 0.5);
	border-color: rgba(240, 255, 0, 0.1);
	border-style: outset;
	border-width: 0.1px;
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	a {
		text-decoration: none; //remover o sublinhado do Link - colocar a tag 'a' por causa do href
	}
`;

const StyleContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	height: 70vh;
`;

const Image = styled.img`
	width: 100%;
	height: 50vh;
	object-fit: cover;
`;

const StyleInfo = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	text-align: left;
	padding-left: 1rem;
	h3 {
		padding-top: 1rem;
	}
`;

export default CardPortfolio;
