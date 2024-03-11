import React from 'react';
import { Sidebar, Header, Container, Wrapper, Content } from '../../components';
// import { Content } from './styles';

const Home = () => {
	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<h1>Home Page</h1>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
