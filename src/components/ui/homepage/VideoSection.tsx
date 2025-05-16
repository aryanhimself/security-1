import { VIDEO_SECTION } from "@/config/data";
import dynamic from "next/dynamic";
import React from "react";
const VideoPlayer = dynamic(() => import("../../common/Videoplayer"));

const VideoSection = () => {
	const { buttonId, buttonText, heading, sectionId, videoPoster, videoUrl } =
		VIDEO_SECTION;
	return (
		<section className="unique__feature__section padding__style" id={sectionId}>
			<div className="container">
				<div className="unique__feature__section__content flex flex__col item-center">
					<h1 className="">{heading}</h1>
					<div className="large__video__container">
						<VideoPlayer poster={videoPoster} url={videoUrl} />
					</div>

					<button type="button" className="button" id={buttonId}>
						{buttonText}
					</button>
				</div>
			</div>
		</section>
	);
};

export default VideoSection;
