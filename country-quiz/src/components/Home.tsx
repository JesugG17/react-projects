import { Github, Linkedin } from "."
import { useQuestionStore } from "../store/questions"

export const Home = () => {

    const { createQuestions } = useQuestionStore();

  return (
    <section className="home">
        <div className="introduction">
            <div>
                <h4>Welcome to the country quiz!</h4>
                <p>Test your geographic knowledge :)</p>
            </div>
            <button onClick={() => createQuestions(10)}>Start the quiz!</button>
        </div>
        <footer className="media">
            <h4>Visit my other social medias!</h4>
            <div>
                <a href="https://github.com/JesugG17" target="_blank">
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/jesus-gastelum-433795225/" target="_blank">
                    <Linkedin />
                </a>
            </div> 
        </footer>

    </section>
  )
}