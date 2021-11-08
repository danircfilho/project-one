import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const PortfolioDetail = () => {
	const { slug } = useParams();
	const { data } = useApi(`/portfolio/${slug}`);

	return (
		<Detail>
			<Stats>
				<div>
					<Title>{data?.data?.title}</Title>
					<ShortDescription>
						<p>{data?.data?.description}</p>
					</ShortDescription>
				</div>
				<Info>
					<h3>Information Technologies</h3>
					<Technologies>
						<Technol>
							<FontAwesomeIcon icon={["fab", "react"]} size="4x" /> React
						</Technol>
						<Technol>
							<FontAwesomeIcon icon={["fab", "node-js"]} size="4x" /> NodeJs
						</Technol>
						<Technol>
							<FontAwesomeIcon icon={["fas", "database"]} size="4x" /> MongoDB
						</Technol>
					</Technologies>
				</Info>
			</Stats>
			<Description>
				<div>
					<p>{data?.data?.longDescription}</p>
				</div>
			</Description>
			<img src={data?.data?.image} alt="" />
		</Detail>
	);
};

const Detail = styled.div`
	width: 80%;
	min-height: 80vh;
	background: white;
	position: absolute;
	left: 10%;
	top: 15%;
	margin-bottom: 10%;
	z-index: 10;
	img {
		width: 100%;
		height: 50vh;
		object-fit: cover; /* ajusta a imagem a div, exemplo - canto arredondado */
	}
`;

const Stats = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 5rem;
`;

const Title = styled.h2`
	color: #696969;
`;

const Description = styled.div`
	padding: 2rem 5rem;
	p {
		color: black;
	}
`;

const ShortDescription = styled(Description)`
	padding: 0; /* herda propriedades do styled Description */
`;

const Info = styled.div`
	text-align: center;
	min-width: 300px;
	h3 {
		color: #696969;
	}
`;

const Technologies = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding-top: 1rem;
	svg {
		color: #416cd5;
	}
`;

const Technol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #416cd5;
`;

export default PortfolioDetail;
