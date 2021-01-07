import React from "react";

import psm1 from "./certificates/psm1.png";
import psm2 from "./certificates/psm2.png";
import spc from "./certificates/spc.png";
import cma from "./certificates/cma.png";
import icp from "./certificates/icp.png";
import icpAtf from "./certificates/icp-atf.png";
import icpAcc from "./certificates/icp-acc.png";

import { AboutContainer, LeftColumn, RightColumn } from "./styled";

const About = () => {
  return (
    <>
      <h2>Обо мне</h2>
      <AboutContainer>
        <LeftColumn>
          <ul>
            <li>Профессиональный скрам-мастер</li>
            <li>Agile coach</li>
            <li>Сертифицированный SAFe Program Consultant</li>
            <li>
              Сертификат о 4х модульном обучении в Эриксоноском университете
            </li>
            <li>
              6 лет опыта построения эффективных Agile команд в IT, Telecom
              компаниях 500+ человек
            </li>
            <li>
              Сопровождение Agile, SAFe трансформаций в крупных международных
              компаниях
            </li>
            <li>
              Agile обучение и менторство для Скрам Мастеров и Лидеров команд и
              организаций
            </li>
            <li>
              Регулярные выступления на крупных российских конференциях и
              митапах - Agiledays, SECR, HR API, Onlinedays, Enterprise Agile
              Russia Meetups
            </li>
          </ul>
        </LeftColumn>
        <RightColumn>
          <img src={psm1} alt="PSM I" />
          <img src={psm2} alt="PSM II" />
          <img src={spc} alt="SPC" />
          <img src={cma} alt="CMA" />
          <img src={icp} alt="ICP" />
          <img src={icpAcc} alt="ICP-ACC" />
          <img src={icpAtf} alt="ICP-ATF" />
        </RightColumn>
      </AboutContainer>
    </>
  );
};

export default About;
