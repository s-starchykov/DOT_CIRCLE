import style from './TextBox.module.css'

let TextBox = () => {
    return (
        <div className={style.TextBox}>
            <div className="head">
                <h1>
                    WHAT DO YOU GET FROM OUR OPEN PROGRAMS?
                </h1>
            </div>
            <br/>
            <div className="content">
                <h3>
                    RESULTS
                </h3>
                br
                <p>
                    A lot of practice and little theory. You work in pairs, in triples and groups, participate in games. You get out of a vicious circle, which went on for years. You get rid of the burden of the past. You find a solution for your task or change the situation.
                </p>
                <br/>
                <h3>
                    LEARNING PROCESS 
                </h3>
                <p>
                    Activities are held in an atmosphere of trust and understanding. Constant practice, discussions and analysis of the complex cases. You can be yourself and not be afraid of a negative or judgmental assessment. People with an unstable state of mind are not allowed to participate in the training programs.
                </p>
                <br/>
                <h3>
                    STRONG PERSONALITY SKILLS
                </h3>
                <p>
                    You learn to effectively manage your resources and time. You learn how to live differently - master the skills and techniques of an effective person. You begin to explore new heights in your personal and professional life.
                </p>
                <br/>
                <h3>
                    NEW CIRCLE OF COMMUNICATION
                </h3>
                <p>
                    You meet new people, gain new connections and get a lot of useful information.
                </p>
            </div>
        </div>
        
    )
};

export default TextBox;