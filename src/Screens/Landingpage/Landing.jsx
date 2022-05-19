import "../Landingpage/landing.css";
const LandingPage = () => {
  return (
    <>
      <div className="landing_container">
        <div className="landing_inside_container">
          <img
            className="pomodoro_landing_image"
            src="https://img.freepik.com/free-vector/flat-time-management-concept-illustration_52683-55533.jpg?w=740&t=st=1652814986~exp=1652815586~hmac=91518ea735f2c280c3ce7a1bbca9778e4d2918ed460a02eea8375df627e3cbe1"
            alt="img"
          />
          <p className="pomo_intro_para">
            The Pomodoro Technique is useful if you get distracted while working
            on a project or want to understand how long a task takes. It’s ideal
            for many types of work including writing, coding, design, and study.
            The technique also works if you have a lot of repetitive work to get
            through, such as wading through a busy inbox.
            <br /> <br />
            <button className="get_started_button">Get Started</button>
          </p>
        </div>
      </div>
    </>
  );
};
export { LandingPage };
