import React from "react";
import { Link } from "react-router-dom";

const about3 = () => {

  const url= "/hats"

  return (
    <div className="about-container">
      <p className="justify">
      Mario can set a timer for these jobs to let him
know how much to charge Princess Peach. 
<br></br>
<br></br>
The app also lets him know which jobs are ongoing, and which completed jobs remain unpaid.
<br></br>
<br></br>
That is how Hats works. 
<br></br>
<br></br>
Now, go set up Hats!
     </p>
      <Link to={url}>
        <p className="set-up">Set Up</p>
      </Link>
    </div>
  );
};

export default about3;
