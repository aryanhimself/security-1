// import React from "react";
// import "./opportunities_section.css";
// import VideoPlayer from "../../common/Videoplayer";
// import HorizontalLine from "@/components/common/HorizontalLine";
// import SectionButton from "@/components/common/SectionButton";
// import { OPPORTUNITY_SECTION } from "@/config/data";
// const Section4 = () => {
// 	const { heading, href, id, name, poster, subheading, title, url } =
// 		OPPORTUNITY_SECTION;
// 	return (
// 		<section
// 			className="opportunitie__section employer__section padding__style"
// 			id={id}
// 		>
// 			<div className="container">
// 				<div className="opportunitie__section__content employer__section__content flex flex__col item-center">
// 					<HorizontalLine heading={heading} subHeading={subheading} />
// 					<h2 className="">{title}</h2>
// 					<div className="large__video__container">
// 						<VideoPlayer poster={poster} url={url} />
// 					</div>
// 					<SectionButton href={href} name={name} />
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Section4;

import React from "react";
import "./opportunities_section.css";
import VideoPlayer from "../../common/Videoplayer";
import HorizontalLine from "@/components/common/HorizontalLine";
import SectionButton from "@/components/common/SectionButton";
import { OPPORTUNITY_SECTION } from "@/config/data";
const Section4 = () => {
  const { heading, href, id, name, poster, subheading, title, url } =
    OPPORTUNITY_SECTION;
  return (
    <section className="employer__section padding__style" id={id}>
      <div className="container">
        <div className="unique__feature__section__content flex flex-col items-center gap-9">
          <HorizontalLine heading={heading} subHeading={subheading} />
          <h2 className="">{title}</h2>
          <div className="large__video__container">
            <VideoPlayer url={url} poster={poster} />
          </div>
          <SectionButton href={href} name={name} id="#section-4" offset="0" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
