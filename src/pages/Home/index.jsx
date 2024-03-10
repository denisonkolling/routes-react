import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Content from '../../components/Content';

const Home = () => {
	return (
		<>
			<Header />
			<div style={{ display: 'flex' }}>
				<Sidebar />
				<Content />
			</div>
		</>
	);
};

export default Home;
