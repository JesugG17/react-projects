import { useState, ChangeEvent } from 'react'
import { useQuestionStore } from "../store/questions"

import { QuizLayout } from "../layout/QuizLayout";
import { Github, Linkedin } from "."

const IS_FLAG_QUIZ = true;
const IS_NOT_FLAG_QUIZ = false;



export const Home = () => {

    const { createQuestions } = useQuestionStore();
    const [region, setRegion] = useState<string>('all');

    const onRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const region = event.currentTarget.value;
        setRegion(region);
    }

  return (
    <QuizLayout>
        <section className="home">
            <div className="introduction">
                <div>
                    <h4>Welcome to the country quiz!</h4>
                    <p>Test your geographic knowledge :)</p>
                </div>
                <div className="introduction__options">
                    <button onClick={() => createQuestions(10, IS_NOT_FLAG_QUIZ, region)}>Start country quiz!</button>
                    <button onClick={() => createQuestions(10, IS_FLAG_QUIZ, region)}>Start flags quiz!</button>
                    <select
                        onChange={onRegionChange}
                    >
                        <option value="all">Region</option>
                        <option value="europe">Europe</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                    </select>
                </div>
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
    </QuizLayout>
  )
}
