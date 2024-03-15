import React from 'react';
import { Sidebar, Header, Container, Wrapper, Content, Title } from '../../components';

const Map = () => {
	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<Title>Map</Title>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Map;
