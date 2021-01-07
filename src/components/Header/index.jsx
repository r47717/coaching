import React from "react";
import { Logo, Menu, Quote, RightPart, TopBar, MobileTitle } from "./styled";
import image from "./logo.png";

const Header = () => {
  return (
    <TopBar>
      <Logo>
        <img src={image} alt="logo" />
      </Logo>
      <RightPart>
        <Menu>
          <a href="#about">
            <li>Обо мне</li>
          </a>
          <a href="#products">
            <li>Продукты</li>
          </a>
          <a href="#clients">
            <li>Клиенты</li>
          </a>
          <a href="#coaching">
            <li>Коучинг</li>
          </a>
          <a href="#enroll">
            <li>Записаться</li>
          </a>
          <a href="#contacts">
            <li>Контакты</li>
          </a>
        </Menu>
        <Quote>
          "Жизнь дается один раз, и хочется прожить ее бодро, осмысленно,
          красиво. Хочется играть видную, самостоятельную, благородную роль,
          хочется делать историю, чтобы те же поколения не имели права сказать
          про каждого из нас: то было ничтожество, или еще хуже того..."
        </Quote>
      </RightPart>
      <MobileTitle>
        Светлана Болсуновская, Скрам Мастер и Agile Коуч
      </MobileTitle>
    </TopBar>
  );
};

export default Header;
