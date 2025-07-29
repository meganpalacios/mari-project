import { useState } from 'react'
import m from './assets/m.png'
import a from './assets/a.png'
import r from './assets/r.png'
import i from './assets/i.png'
import carta from './assets/carta.png'
import rocola from './assets/rocola.png'
import birthday from './assets/memories/birthday.jpeg'
import birthday1 from './assets/memories/birthday-1.jpeg'
import museum from './assets/memories/museum.jpeg'
import museum1 from './assets/memories/museum-1.jpeg'
import museum2 from './assets/memories/museum-2.jpeg'
import museum3 from './assets/memories/museum-3.jpeg'
import museum4 from './assets/memories/museum-4.jpeg'
import study from './assets/memories/study.jpeg'
import red1 from './assets/memories/red-1.jpeg'
import red2 from './assets/memories/red-2.jpeg'
import red3 from './assets/memories/red-3.jpeg'
import red4 from './assets/memories/red-4.jpeg'
import red5 from './assets/memories/red-5.jpeg'
import red6 from './assets/memories/red-6.jpeg'
import red7 from './assets/memories/red-7.jpeg'
import scrappy from './assets/memories/scrappy.jpeg'
import scrappy1 from './assets/memories/scrappy-1.jpeg'
import scrappy2 from './assets/memories/scrappy-2.jpeg'
import iloveaboutyou from './assets/iloveaboutyou.json'
import snoopy from './assets/snoopy_heart.png'
import open_snoopy from './assets/open_snoopy.png'
import './App.css'

function App() {
  const [signedIn, setSignedIn] = useState(localStorage.getItem("userIsSignedIn") || false)
  const [cartaIsOpen, setCartaIsOpen] = useState(false);
  const [currentILove, setCurrentILove] = useState(0)
  const [snoopyIsOpen, setSnoopyIsOpen] = useState(false);

  function authenticate(formData) {
    const password = formData.get("password");
    if (password === "tomatita") {
      setSignedIn(true);
      localStorage.setItem("userIsSignedIn", true)
    }
  }

  const memories = [birthday, birthday1, museum, museum1, museum2, museum3, museum4, study, red1, red2, red3, red4, red5, red6, red7, scrappy, scrappy1, scrappy2]
  let styleIndex = 0;

  const openSweetNothings = () => {
    setCartaIsOpen(true)
  }
  const closeSweetNothings = () => {
    setCartaIsOpen(false)
  }

  const backILove = () => {
	setCurrentILove((prev) => prev - 1)
  }
  const nextIlove = () => {
	setCurrentILove((prev) => prev + 1)
  }

  const openQuestion = () => {
	setSnoopyIsOpen(true)
  }

  return (
		<>
			{!signedIn ? (
				<div className="signIn">
					<form action={authenticate}>
						<label htmlFor="password">Enter the password</label>
						<input type="text" name="password" />
						<button type="submit">Enter</button>
					</form>
				</div>
			) : (
				<>
					<div className="mari">
						<img src={m} alt="m" />
						<img src={a} alt="a" />
						<img src={r} alt="r" />
						<img src={i} alt="i" />
					</div>

					<h2>Greatest hits</h2>
					<div className="greatestHits">
						<a
							href="https://open.spotify.com/playlist/4Sl1xPWHTschxxyiwbe64c?si=7123f5265df94be3"
							target="_blank">
							<img src={rocola} className="coolHover" alt="m" />
						</a>
					</div>

					<h2>Things I love about you &lt;3</h2>
					<img
						src={carta}
						alt="carta"
						className="coolHover altCoolHover"
						onClick={openSweetNothings}
					/>

					{cartaIsOpen && (
						<>
							<div className="overlay">
								<div className="thingsILoveAboutYou">
									<div className='control'>
										<span>&lt;3</span>
										<span>I LOVE</span>
										<button onClick={closeSweetNothings}>X</button>
									</div>
									<div className="content">
										{iloveaboutyou[currentILove].description}
									</div>
									<div className='control'>
										<button disabled={currentILove === 0} onClick={backILove}>
											Back
										</button>
										<span>{iloveaboutyou[currentILove].id}</span>
										<button disabled={currentILove === 73} onClick={nextIlove}>Next</button>
									</div>
								</div>
							</div>
						</>
					)}

					<h2>Our memories</h2>
					<div className="imageContainer">
						{memories.map((memory, index) => {
							styleIndex++;
							if (styleIndex === 4) styleIndex = 1;
							const style =
								styleIndex === 1
									? "style1"
									: styleIndex === 2
									? "style2"
									: "style3";
							return (
								<figure className={`figure ${style}`} key={index}>
									<img src={memory} />
								</figure>
							);
						})}
					</div>

					<div className="snoopy">
						{!snoopyIsOpen ? (
							<img className='snoopy1' src={open_snoopy} onClick={openQuestion} />
						) : (
							<>
								<img className='snoopy2' src={snoopy} />
								<h2 className='question'>Will you be my girlfriend?</h2>
							</>
						)}
					</div>
				</>
			)}
		</>
	);
}

export default App
