import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import GetAppIcon from "@mui/icons-material/GetApp";
import CustomButton from "../Button/Button";

import resumeData from "../../utils/resumeData";

import "./Profile.css";

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );

  const Profile = () => {
    return (
      <div className="profile container_shadow">
        <div className="profile_name">
          <Typography className="name">{resumeData.name}</Typography>
          <Typography className="title">{resumeData.title}</Typography>
        </div>
  
        <figure className="profile_image">
          <img src={require("../../assets/images/profilePicture.jpg")} alt="" />
        </figure>
  
        <div className="profile_information">
          <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
            <CustomTimelineItem title="Name" text={resumeData.name} />
            <CustomTimelineItem title="Title" text={resumeData.title} />
            <CustomTimelineItem
              title="Email"
              text={resumeData.email}
              link={`mailto:${resumeData.email}`}
            />
  
            {Object.keys(resumeData.socials).map((key, idx) => (
              <CustomTimelineItem
                key={idx}
                title={key}
                text={resumeData.socials[key].text}
                link={resumeData.socials[key].link}
              />
            ))}
          </CustomTimeline>
  
          <div className="button_container" style={{ display: "flex" }}>
            <a
              href={resumeData.resume}
              target={"_blank"}
              rel="noopener noreferrer"
              className="a_nostyles"
            >
              <CustomButton text={"Download Resume"} icon={<GetAppIcon />} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
