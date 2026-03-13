import "./App.css";

function App() {

  return(
    <>
      <div className="container">Gallery</div>

      <div className="btn">
        <button id="Flores">Flores</button>
        <button id="Godinez">Godinez</button>
        <button id="Magallanes">Magallanes</button>
      </div>

      <div className="pic-container">
        <div className="Godinez-pics">
          <img src="src/assets/Godinez_files/Kin Ryuga_Ver.2.png"></img>
          <img src="src/assets/Godinez_files/Zein Arklight.png"></img>
          <img src="src/assets/Godinez_files/Riyo Rosa.png"></img>
          <img src="src/assets/Godinez_files/Senshi Kaizo.png"></img>
          <img src="src/assets/Godinez_files/610521453_1347168403761707_3353129343760765811_n.jpg"></img>
          <img src="src/assets/Godinez_files/611384253_1623211602378980_851219491131293586_n.jpg"></img>
          <img src="src/assets/Godinez_files/615811442_122114927469096218_7641286712612361367_n.jpg"></img>
          <img src="src/assets/Godinez_files/645708843_122120231697096218_3386914659470613416_n.jpg"></img>
        </div>
        <div className="Flores-pics">

        </div>
        <div className="Magallanes">

        </div>
      </div>


    </>
  );
 
}

export default App;