import React from 'react';
import { Sidebar, Header, Container, Wrapper, Content, Title } from '../../components';

const Home = () => {
	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<Title>Trails</Title>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
