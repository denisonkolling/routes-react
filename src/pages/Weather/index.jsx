import React from 'react';
import { Sidebar, Header, Container, Wrapper, Content } from '../../components';

const Home = () => {
	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<h1>Weather</h1>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
