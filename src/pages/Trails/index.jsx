import React from 'react';
import {	Sidebar,	Header,	Container,	Wrapper,	Content,	Title,	Card,	CardContainer,	Input} from '../../components';
import { InputWrapper, StyledFontAwesomeIcon } from './styles';

const Trails = () => {
	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<InputWrapper>
						<Input
							style={{ backgroundColor: 'white' }}
							type="text"
							placeholder="Enter a city, park or trail..."
							// value={search}
							// onChange={(e) => setSearch(e.target.value)}
						/>
						<StyledFontAwesomeIcon />
					</InputWrapper>
					
					<CardContainer>
						<Card>
							<h1>⛺🌄🌅</h1>
							<h3>Lake Tahoe</h3>
							<p>Tahoe National Forest</p>
							<p>⭐⭐⭐⭐</p>
							<p>(246)</p>
							<h6>Length 2.5mi - Time 2h 39m</h6>
						</Card>
						<Card>
							<h1>⛺🌄🌅</h1>
							<h3>Lake Tahoe</h3>
							<p>Tahoe National Forest</p>
							<p>⭐⭐⭐⭐</p>
							<p>(246)</p>
							<h6>Length 2.5mi - Time 2h 39m</h6>
						</Card>
						<Card>
							<h1>⛺🌄🌅</h1>
							<h3>Lake Tahoe</h3>
							<p>Tahoe National Forest</p>
							<p>⭐⭐⭐⭐</p>
							<p>(246)</p>
							<h6>Length 2.5mi - Time 2h 39m</h6>
						</Card>
						<Card>
							<h1>⛺🌄🌅</h1>
							<h3>Lake Tahoe</h3>
							<p>Tahoe National Forest</p>
							<p>⭐⭐⭐⭐</p>
							<p>(246)</p>
							<h6>Length 2.5mi - Time 2h 39m</h6>
						</Card>
						<Card>
							<h1>⛺🌄🌅</h1>
							<h3>Lake Tahoe</h3>
							<p>Tahoe National Forest</p>
							<p>⭐⭐⭐⭐</p>
							<p>(246)</p>
							<h6>Length 2.5mi - Time 2h 39m</h6>
						</Card>
					</CardContainer>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Trails;
