import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { PauseCircleOutline, PlayCircleOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import resumeData from "../../utils/resumeData";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section pt_45 pb_45">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          F
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_descripton"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src="" alt="" className="projectDialog_image" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="projectDialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
