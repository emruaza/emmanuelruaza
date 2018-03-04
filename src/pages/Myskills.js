import React, { Component } from "react";
import skillData from '../datas.json';

const skillPercentage = (percent) => {
  if (parseInt(percent) >= 90) {
    return "Expert"
  } else if (parseInt(percent) >= 80) {
    return "Advance"
  } else if (parseInt(percent) > 71) {
    return "Intermediate"
  } else if (parseInt(percent) >= 60 && parseInt(percent) < 71) {
    return "Beginner"
  } else if (parseInt(percent) === 71) {
    return "Need's a Refreshment"
  }

  console.log(parseInt(percent))
}

class Myskills extends Component {
  render() {
    return (
      <div>
        <div className="skills__top"></div>
        <div className="skills clearfix">
          <h2 className="text-center hind skills__header">MY SKILLS</h2>
          <ul className="skills__content text-center">
            {
              skillData.skills.map((sk, i) => {
                return (
                  <li className="skills__content--list" key={i}>
                    <span className="skills__content-label text-right karma">{skillData.skills[i].name}</span>
                    <div className="skills__content-bar" style={{borderColor: skillData.skills[i].color}}>
                      <span className="skills__content-bar--load hind" style={{backgroundColor: skillData.skills[i].color, width: skillData.skills[i].width}}>
                        {skillPercentage(skillData.skills[i].width)}
                      </span>
                    </div>
                  </li>
                ) 
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Myskills;