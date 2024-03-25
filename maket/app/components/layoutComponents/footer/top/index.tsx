'use client';
import React from 'react';
import style from './style';
import Logo from '../../header/top/logo';
import WhiteButton from '@app/components/helpersComponents/button/whiteButton';
import AzureButton from '@app/components/helpersComponents/button/azureButton';
import InfoItem from '@app/components/helpersComponents/infoItem';
import { globalTheme } from '@app/hooks/useTheme';

export default () => {
    const { Container, Item } = style();
    return (
        <Container>
            <Item>
                <Logo />
                <InfoItem item={{ title: '8 800 841-95-95', text: 'Служба поддержки' }} />
                <InfoItem item={{ title: 'support@sport.ru', text: 'Служба поддержки' }} />
            </Item>
            <Item style={{ gap: '2em' }}>
                <WhiteButton style={{ color: globalTheme.textBlack, fontWeight: 700 }}>
                    Вакансии
                </WhiteButton>
                <WhiteButton style={{ color: globalTheme.textBlack, fontWeight: 700 }}>
                    Блог
                </WhiteButton>
                <WhiteButton style={{ color: globalTheme.textBlack, fontWeight: 700 }}>
                    Акции
                </WhiteButton>
                <AzureButton>Предложить идею</AzureButton>
            </Item>
        </Container>
    );
};
