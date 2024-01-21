import BoxSkill from "../common/BoxSkill"
import linkedin from '../../assets/icons/linkedin.svg'
import reactIcon from '../../assets/icons/react.svg'
import jsIcon from '../../assets/icons/javascript.svg'
import tailwind from '../../assets/icons/tailwind.svg'
import git from '../../assets/icons/git.svg'
import java from '../../assets/icons/java.png'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import firebase from '../../assets/icons/firebase.png'
import sql from '../../assets/icons/sql.png'
import python from '../../assets/icons/python.png'

import { Element } from "react-scroll"
const Skills = () => {
    return (
        <Element name="skills">
            <div className="py-5  max-w-screen-2xl mx-auto min-w-[320px] lg:max-h-[900px] min-h-[400px]">
                <p className="py-4 text-center text-dispay-subhead">
                    My <span className="font-extrabold">Skills</span>
                </p>
                <div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-5">
                    <BoxSkill logo={html} text={"HTML5"} />
                    <BoxSkill logo={css} text={"CSS3"} />
                    <BoxSkill logo={jsIcon} text={"JavaScript"} />
                    <BoxSkill logo={reactIcon} text={"React"} />
                    <BoxSkill logo={tailwind} text={"Tailwind"} />
                    <BoxSkill logo={sql} text={"SQL"} />
                    <BoxSkill logo={python} text={"Python"} />
                    {/* <BoxSkill logo={linkedin} text={"Django"} /> */}
                    <BoxSkill logo={firebase} text={"Firebase"} />
                    <BoxSkill logo={java} text={"Java"} />
                    <BoxSkill logo={java} text={"Spring boot3"} />
                    <BoxSkill logo={git} text={"Git"} />
                </div>
            </div>
        </Element>
    )
}

export default Skills