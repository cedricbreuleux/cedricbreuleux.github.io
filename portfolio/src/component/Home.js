import '../css/App.css';
import '../css/Ball.css';

export default function Home() {
  return (
    <div className="container">

      <div className='contenu'>
        <p className="tcontenu">Actuellement en premiére année à la web accademie chez epitech,<br></br>
          j'ai eu l'occasion de faire un bon nombre de projets, web comme mobile<br></br>
          composés de restrictions ainsi que des délais restreint.</p>
      </div>
      <div className='contenu2'>
        <p className="tcontenu">Les technologies que je maitrises le plus: <br></br>
          HTML, CSS, JAVASCRIPT, JQUERY, PHP, REACT, REACT NATIVE.</p>
      </div>
      <div className='message'>
        <img src='/message.png'></img>
        <h3 className='titremessage'>Me contacter</h3>
        <h3 className='titre2'>Revenir sur l'accueil</h3>
      </div>
      <div className='enveloppe'>
      </div>
      <div className="formcontact">
        <form className='form'>
          <select className="select">
            <option>Proposition partenariat</option>
            <option>Proposition de mission</option>
            <option>Suggestion</option>
            <option>Autre</option>
          </select>
          <input className='email' type='email' placeholder='Votre email' name="email"></input>
          <input className='text' type='text' placeholder='Votre texte' name="texte"></input>
          <button className="submit" type='button'>Envoyer</button>
        </form>
      </div>




      <div className="card photo">
        <div className="card-inner">
          <div className="card-front">
            <div className="card-content">
            </div>
          </div>
          <div className="card-back">
            <div className="card-top">
              <div className="card-image">
                <img className="intero" src='png-clipart-computer-icons-question-mark-others-miscellaneous-blue_1_-removebg-preview.png'></img>
                <p className='textecard'>Voir plus d'informations sur moi</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="MenuAngle"></div>
      <section id="balle1" className="stage">
        <figure className="ball bubble"><p className="titre-bulle">See my projects</p></figure>
      </section>
      <section id="balle2" className="stage">
        <figure className="ball bubble t1"><p className="titre-bulle">My twitter</p></figure>
      </section>
      <section id="balle3" className="stage">
        <figure className="ball bubble t2"><p className="titre-bulle">Maquette</p></figure>
      </section>
      <section id="balle4" className="stage">
        <figure className="ball bubble t3"><p className="titre-bulle">My snapchat</p></figure>
      </section>
      <section id="balle5" className="stage">
        <figure className="ball ballback bubble"><p className="titre-bulle">Back</p></figure>
      </section>
      <section id="balle6" className="stage">
        <figure className="ball ballback bubble"><p className="titre-bulle">Back</p></figure>
      </section>


      <div className="projet1">
        <h3>Resumé: </h3>
        <p>Le but du projet était de refaire les fonctionnalités de base de twitter</p>
      </div>
      <div className='techno1'>
        <h3>Technos utilisées</h3>
        <p>PHP, SQL, HTML, CSS, <br></br>JAVASCRIPT, JQUERY</p>
      </div>

      <div className='projet2'>
        <h3>Resumé:</h3>
        <p>Le but était de reproduire une maquete reponsive</p>
      </div>

      <div className='techno2'>
        <h3>Technos utilisées</h3>
        <p>HTML, CSS</p>
      </div>


      <div className="projet3">
        <h3>Resumé: </h3>
        <p>Le but du projet était de refaire les fonctionnalités de base de snapchat, ainsi que son design</p>
      </div>

      <div className='techno3'>
        <h3>Technos utilisées</h3>
        <p>REACT NATIVE, JSX, CSS,<br></br> NODE-JS, API</p>
      </div>



      <div className='cc1'>
        <img className='c1' src='/Capture d’écran du 2023-06-14 10-55-46.png'></img>
      </div>

      <div className='cc2'>
        <img className='c2' src='/Capture d’écran du 2023-06-14 10-55-59.png'></img>
      </div>

      <div className='cc3'>
        <img className='c3' src='/Capture d’écran du 2023-06-14 10-56-15.png'></img>
      </div>

      <div className='cc4'>
        <img className='c4' src='Screenshot_20230614-113704_Expo Go.jpg'></img>
      </div>

      <div className='cc5'>
        <img className='c5' src='/Screenshot_20230614-113709_Expo Go.jpg'></img>
      </div>

      <div className='cc6'>
        <img className='c6' src='/Screenshot_20230614-113805_Expo Go.jpg'></img>
      </div>

      <div className='cc7'>
        <img className='c7' src='Screenshot_20230614-113850_Expo Go.jpg'></img>
      </div>

      <div className='cc8'>
        <img className='c8' src='Capture d’écran du 2023-06-14 15-09-37.png'></img>
      </div>

      <div className='cc9'>
        <img className='c9' src='Capture d’écran du 2023-06-14 15-10-12.png'></img>
      </div>




      <div className='contenuinfo'>
        <p>
          Je m'apelle Cédric, j'ai 26 ans et je suis fan de l'univers informatique et des jeux vidéos. Je suis également passionné de bmx,
          sport que je fais depuis maintenant 6ans sur strasbourg. Je suis quelqun de sociable, trés perseverant et patient.
        </p>
      </div>

      <div className='cv'>
        <a href="cédric-breuleux-cv.pdf" download>
          <p>Télecharger mon cv</p>
        </a>
      </div>

      <div className='alternance'>
        <p>Futur alternant chez Exo Partners</p>
      </div>








    </div>


  );
}
