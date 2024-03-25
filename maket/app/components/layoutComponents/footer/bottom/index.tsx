'use client';
import React from 'react';
import style from './style';
import Logo from '../../header/top/logo';
import { globalTheme } from '@app/hooks/useTheme';

export default () => {
    const { Container, IconList, IconItem, Text, LogoList } = style();
    return (
        <Container>
            <IconList>
                <IconItem>
                    <div className="icon-file"></div>PDF презентация
                </IconItem>
                <IconItem>
                    <div className="icon-video"></div>Видео инструкция
                </IconItem>
                <IconItem>
                    <div className="icon-info"></div>FAQ
                </IconItem>
                <IconItem style={{ color: globalTheme.mainBlue }}>
                    <div className="icon-youtube"></div>Мы на YouTube
                </IconItem>
                <IconItem>Политика конфиденциальности</IconItem>
                <IconItem>Лицензионное соглашение</IconItem>
            </IconList>
            <Text>
                Настоящая Политика обработки персональных данных разработана в соответствии с
                Конституцией Российской Федерации, Трудовым кодексом Российской Федерации,
                Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года
                149-ФЗ "Об информации, информационных технологиях и о защите информации",
            </Text>
            <LogoList>
                <Logo />
                <div>Разработка платформы</div>
            </LogoList>
        </Container>
    );
};
