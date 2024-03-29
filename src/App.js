import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Timeline } from "./components/Timeline";

function App() {
  const [userName, setUserName] = useState("");
  const [edu,setedu]=useState("")
  const [description,setdescription]=useState("")
  const [project,setproject]=useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;
  const [skills,setskills]=useState([]) 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setUserName(response.data.user.about.name);
        setdescription(response.data.user.about.description);
        const skill=response.data.user.skills
        setskills(skill)
        setedu(response.data.user.timeline)
        setproject(response.data.user.projects)
      
        console.log(skill)
        console.log(response)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <NavBar />
      <Banner username={userName} texts={text} description={description}/>
      <Timeline exp={edu}/>
      <Skills skill={skills}/>
      <Projects pro={project} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
