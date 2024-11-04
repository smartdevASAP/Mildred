import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <img
        src="https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246133.jpg?ga=GA1.1.1756426119.1717703136&semt=ais_siglip"
        alt=""
      />
      <section className="overlay">
        Meet me <br />
        <span className="name">Mildred Karen</span>
      </section>
      <div className="moreAbout">
        I'm a student in Austria University <br /> I pursue a certificate
        program in I.T <br /> Im a Front End web developer <br />
        UI & UX designer,eager to leran every day. <br />
      </div>
    </div>
  );
}

export default Home;
