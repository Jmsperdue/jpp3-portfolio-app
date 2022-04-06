import React from "react";
import "./Resume.css";
import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
          <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>About Me</h6>
          </Grid>
          <Grid item xs={12}>
              <Typography variant ="body2" className='aboutme_text'>
                  {resumeData.about}
                  </Typography>
          </Grid>
      </Grid>

      {/* Experiences and Education */}
      <Grid container className=""></Grid>

      {/* Services */}
      <Grid container className=""></Grid>

      {/* Skills */}
      <Grid container className=""></Grid>

      {/* Contact */}
      <Grid container className=""></Grid>
    </>
  );
};

export default Resume;
