import React from "react";
import { BottomBar } from "./styled";

const Footer = () => {
  return (
    <BottomBar>
      <div>
        <div>&copy;&nbsp;2020, Светлана Болсуновская</div>
        <div>
          <a
            href="https://www.facebook.com/svetlana.bolsunovskaya"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/dreamteams.agile.coach/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div>
          <a href="mailto:svetlana.bolsunovskaya@gmail.com">Пишите</a>
        </div>
      </div>
    </BottomBar>
  );
};

export default Footer;
