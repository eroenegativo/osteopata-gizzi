import React from "react";
import mainContentList from "../hooks/mainContent";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ClaudiaGizziMobile from "../assets/claudia-gizzi-osteopata.jpg";
import ClaudiaGizzidesktop from "../assets/claudia-gizzi-desktop.jpg";
function HomeLayout() {
  const categories = mainContentList();
  return (
    <div>
      <Header />
      {categories.map((category) =>
        category?.align === "left" ? (
          <Grid
            container
            spacing={2}
            margin={30}
            key={category.id}
            className="grid-left"
          >
            {window.innerWidth > 1024 ? (
              <React.Fragment>
                <Grid item xs={12} lg={6}>
                  <div>
                    <Typography variant="h3">{category.title}</Typography>
                    <Typography variant="body1">
                      {category.description}
                    </Typography>
                  </div>
                  {category.btnText && category.id === "osteo" ? (
                    <div className="cta">
                      <Button component={Link} to="/osteopatia">
                        {category.btnText}
                      </Button>
                    </div>
                  ) : null}
                </Grid>
                <Grid item xs={12} lg={6}>
                  {category.src ? (
                    <LazyLoad height={150} offset={100}>
                      <img
                        src={category.src}
                        alt={category.altText}
                        width="100%"
                        display="block"
                        loading="lazy"
                      />
                    </LazyLoad>
                  ) : null}
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid item xs={12} lg={6}>
                  {category.src ? (
                     <LazyLoad height={150} offset={100}>
                        <img
                      src={category.src}
                      alt={category.altText}
                      width="100%"
                      display="block"
                      loading="lazy"
                    />
                     </LazyLoad>
                  ) : null}
                </Grid>
                <Grid item xs={12} lg={6}>
                  <div>
                    <Typography variant="h3">{category.title}</Typography>
                    <Typography variant="body1">
                      {category.description}
                    </Typography>
                  </div>
                  {category.btnText && category.id === "osteo" ? (
                    <div className="cta">
                      <Button component={Link} to="/osteopatia">
                        {category.btnText}
                      </Button>
                    </div>
                  ) : null}
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        ) : (
          <Grid
            container
            spacing={2}
            margin={15}
            key={category.id}
            className="grid-right"
          >
            <Grid item xs={category?.xs} lg={category?.lg}>
              {category.id === "about" ? (
                <LazyLoad height={150} offset={100}>
                  <img
                  src={
                    window.innerWidth > 1024
                      ? ClaudiaGizzidesktop
                      : ClaudiaGizziMobile
                  }
                  alt={category?.altText}
                  className="mainImage"
                  loading="lazy"
                />
                </LazyLoad>
              ) : (
               <LazyLoad height={150} offset={100}>
                <img
                  src={category?.src}
                  alt={category?.altText}
                  width="100%"
                  display="block"
                  loading="lazy"
                />
                 </LazyLoad>
              )}
            </Grid>
            <Grid item xs={category?.xs} lg={category?.lg}>
              <Typography variant={category?.variant}>
                {category?.title}
              </Typography>
              <Typography variant="h5">{category?.subtitle}</Typography>
              <Typography variant="body1">{category?.description}</Typography>
              {category.component ? <div>{category.component}</div> : null}
              {category.id === "contact" ? (
                <Box px={10}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100086580675450"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FacebookIcon sx={{ color: "#ff9ea7" }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/claudia-gizzi-32b016202/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon sx={{ color: "#ff9ea7" }} />
                  </a>
                  <a
                    href="https://www.instagram.com/gizzi_claudia_do/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon sx={{ color: "#ff9ea7" }} />
                  </a>
                  <a
                    href="https://wa.me/393427886135"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <WhatsAppIcon sx={{ color: "#ff9ea7" }} />
                  </a>
                </Box>
              ) : null}
              {category.btnText && category.id === "about" ? (
                <div className="cta">
                  <Button component={Link} to="/conoscimi-meglio">
                    {category.btnText}
                  </Button>
                </div>
              ) : null}
              {category.btnText && category.id === "healthcare" ? (
                <div className="cta">
                  <Button component={Link} to="/osteopatia-pma">
                    {category.btnText}
                  </Button>
                </div>
              ) : null}
            </Grid>
          </Grid>
        )
      )}
    </div>
  );
}
export default HomeLayout;
