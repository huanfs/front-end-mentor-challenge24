
import './App.css';
/*components*/
import Title from "./components/title.jsx";
import Accordion from "./components/accordions.jsx";
function App() {

  return (
    <section className="container">
      <Title/>
      <Accordion summary="What is Frontendmentor and how will
      help me?"
      text="Front end mentor provide realistic professional 
      challenges to teach how work with real projects for front 
      end. improve your skills in HTML, CSS and JavaScript now!"/>

<Accordion summary="Is frontendmentor free?"
      text="Yes! its free!, here you can find exercices for build professional 
      layouts and support to build then, all of this for free! also, we have 
      premium chanllenges too, avaliable for studants who pay for this"/>

<Accordion summary="Can i use frontendmentor projects in my porfolio?"
      text="Yes, the projects provided here are professional, and they can 
      be added in your portfolio"/>

<Accordion summary="How can i get help if i'm struggle on a challenge?"
      text="You can send your doubts in our discord channel, in all time! also 
      you receive feedback for other peoples has finished this challenge too"/>
    </section>
  )
}

export default App
