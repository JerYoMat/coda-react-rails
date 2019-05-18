import React from "react";
import Search from "../components/search/Search";
import "./HomePage.scss";
import Logo from "../components/navbar/Logo";
import Typography from "@material-ui/core/Typography";

const HomePage = () => {
  return (
    <div className="home-root">
      <div className='home-title'>
      <Typography  align ='center' variant="h1" >
        C<Logo width="72px" height="78px" viewBox="2 -6 20 32" />DA
      </Typography>
      </div>
      <div className='search-wrapper'>
        <Search />
      </div>
    </div>
  );
};
export default HomePage;
