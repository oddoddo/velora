import styled from 'styled-components';

const EventBanner = () => {
	return (
		<EventBannerWrapper>
			<img src="/public/Frame 426.png" alt="event banner" />
			{/* <img src="/public/eventbanner2.png" alt="event banner" /> */}
		</EventBannerWrapper>
	);
};

export default EventBanner;

const EventBannerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
	overflow: hidden;
	img {
		border-radius: 10px;
		width: 80%;
	}
`;
