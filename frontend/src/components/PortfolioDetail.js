import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useApi } from "../hooks/useApi";
import { useHistory } from "react-router-dom";

const PortfolioDetail = ({slug}) => {
	const { data } = useApi(`/portfolio/${slug}`);

	// useHystory para área clicavel PortfolioDetails
	//deixar somente a área do PortfolioDetails clicável
	const hystory = useHistory()
	
	const exitPortfolioDetails = (e) => {
		const element = e.target 
		if (element.classList.contains('shaddow')) {
			document.body.style.overflow = 'auto'
			hystory.push('/portfolio')
		}
	}

	return (
		<CardShaddow className='shaddow' onClick={exitPortfolioDetails}>
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
						<Technologies> {
								data?.data?.technologies.map(techs => {
									return (
										<Technol key={techs.icon}>
											<FontAwesomeIcon icon={[techs.iconType, techs.icon]} size="4x" />{techs.label}
										</Technol>	
									)
								})
							}	
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
		</CardShaddow>
	);
};

const CardShaddow = styled.div`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled.div`
	width: 80%;
	min-height: 80vh;
	border-radius: 1rem;
	background: white;
	position: absolute;
	left: 10%;
	top: 15%;
	margin-bottom: 10%;
	z-index: 10;
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover; //ajusta a imagem a div, exemplo - canto arredondado
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
