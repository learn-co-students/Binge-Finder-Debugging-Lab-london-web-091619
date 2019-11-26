import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

const TVShowList = props => {
  const mapAllShows = () => {
    const showstoshow = !!props.searchTerm
      ? props.shows.filter(s => s.name.toLowerCase().includes(props.searchTerm))
      : props.shows;

    return showstoshow.map(s => (
      <TVShow
        show={s}
        key={s.id}
        image={s.image}
        selectShow={props.selectShow}
      />
    ));
  };

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
};

export default TVShowList;
