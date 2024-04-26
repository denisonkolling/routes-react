import { Sidebar, Header, Container, Wrapper, Content, Title } from '../../components';

const UserProfile = () => {
	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<Title>User Profile</Title>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default UserProfile;
