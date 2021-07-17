const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 class="card-title">Kiran V</h1>
      <p className="card-discription">
        Vishnu Institute of Computer Education and Technology , Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="congrats-card-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
