import BoxSkill from "../common/BoxSkill"
import linkedin from '../../assets/icons/linkedin.svg'
import reactIcon from '../../assets/icons/react.svg'
import jsIcon from '../../assets/icons/javascript.svg'
import tailwind from '../../assets/icons/tailwind.svg'
import git from '../../assets/icons/git.svg'
const Skills = () => {
    return (

        <div className="py-5 lg:h-[100vh] max-w-screen-2xl mx-auto min-w-[320px] lg:max-h-[800px] min-h-[400px]">
            <p className="text-dispay-subhead text-center py-4">
                My <span className="font-extrabold">Skills</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center items-center">
                <BoxSkill logo={linkedin}  text={"HTML5"} />
                <BoxSkill logo={linkedin}  text={"CSS3"} />
                <BoxSkill logo={jsIcon}    text={"JavaScript"} />
                <BoxSkill logo={reactIcon} text={"React"} />
                <BoxSkill logo={tailwind}  text={"Tailwind"} />
                <BoxSkill logo={linkedin}  text={"SQL"} />
                <BoxSkill logo={linkedin}  text={"Python"} />
                <BoxSkill logo={linkedin}  text={"Django"} />
                <BoxSkill logo={linkedin}  text={"Firebase"} />
                <BoxSkill logo={linkedin}  text={"Java"} />
                <BoxSkill logo={linkedin}  text={"Spring boot3"} />
                <BoxSkill logo={git}       text={"Git"} />
            </div>
        </div>
    )
}

export default Skills