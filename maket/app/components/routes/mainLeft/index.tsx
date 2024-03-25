'use client';
import AzureButton from '@app/components/helpersComponents/button/azureButton';
import style from './style';
import React from 'react';

const previewUrl = ['./img/boots/1'];
const crumsUrl = ['./img/boots/2', './img/boots/3', './img/boots/4', './img/boots/5'];
export default () => {
    const {
        Slider,
        SliderMain,
        Image,
        SliderCrumsContainer,
        SliderCrumsArrow,
        SliderCrums,
        SliderCrumsImage,
    } = style();
    return (
        <Slider>
            <SliderMain>
                <source srcSet={previewUrl[0] + '.webp'} />
                <Image src={previewUrl[0] + '.png'} />
            </SliderMain>
            <SliderCrumsContainer>
                <AzureButton style={{ padding: '20px 12px' }}>
                    <SliderCrumsArrow left className="arrow">
                        <span></span>
                    </SliderCrumsArrow>
                </AzureButton>
                {crumsUrl.map((el, i) => (
                    <SliderCrums key={el + i}>
                        <source srcSet={el + '.webp'} />
                        <SliderCrumsImage src={el + '.png'} />
                    </SliderCrums>
                ))}
                <AzureButton style={{ padding: '20px 12px' }}>
                    <SliderCrumsArrow right className="arrow">
                        <span></span>
                    </SliderCrumsArrow>
                </AzureButton>
            </SliderCrumsContainer>
        </Slider>
    );
};
