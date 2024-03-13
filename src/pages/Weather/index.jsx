import React from 'react';
import { Sidebar, Header, Container, Wrapper, Content, Title } from '../../components';

const Home = () => {
	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<Title>Weather</Title>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
