import React from "react";

const Skill = ({ lang, logos, title }) => {
  return (
    <article className="skills">
      <ul className="ul">
        <h2>{title}</h2>
        <li>
          <img className={logos?'logo':'hide logo'} src={logos?logos[0]:''} alt={logos?`${lang[0]}logo`:''}  />{lang[0]}
          
        </li>

        <li>
        
          <img className={logos?'logo':'hide logo'} src={logos?logos[1]:''} alt={logos?`${lang[1]} logo`:''} />
          {lang[1]}
          
        </li>
        <li>
          <img className={logos?'logo':'hide logo'} src={logos?logos[2]:''} alt={logos?`${lang[2]} logo`:''} />
          {lang[2]}
        </li>
        <li>
          <img className={logos?'logo':'hide logo'} src={logos?logos[3]:''} alt={logos?`${lang[3]} logo`:''} />
          {lang[3]}
        </li>
        <li>
          
          <img className={logos?'logo':'hide logo'} src={logos?logos[4]:''} alt={logos?`${lang[4]} logo`:''} />
          {lang[4]}
        </li>
      </ul>
    </article>
  );
};

export default Skill;
