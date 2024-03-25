import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import { posAbs } from '@app/helpers/style';
import left from '../mianRight/top/left';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Slider: styled.div({
            flex: '0 0 25%',
        }),
        SliderMain: styled.picture(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'block',
            width: '100%',
            aspectRatio: '1',
            backgroundColor: theme?.azure,
            borderRadius: '24px',
            position: 'relative',
        })),
        Image: styled.img({
            ...posAbs,
            objectFit: 'cover',
        }),
        SliderCrumsContainer: styled.div({
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        }),
        SliderCrumsArrow: styled.div(
            ({ theme, left }: { theme?: TglobalTheme; left?: boolean; right?: boolean }) => ({
                transform: left ? 'rotate(90deg)' : 'rotate(-90deg)',
                backgroundColor: theme?.azure,
                borderRadius: 8,
                overflow: 'hidden',
                span: {
                    height: 10,
                    width: 20,
                    pointerEvents: 'none',
                    ':before': { transform: 'rotate(-45deg) translate(35%, 100%);' },
                    ':after': { transform: 'rotate(45deg) translate(-35%, 100%);' },
                },
            }),
        ),
        SliderCrums: styled.picture({
            flex: '0 0 16%',
            aspectRatio: '1',
            position: 'relative',
        }),
        SliderCrumsImage: styled.img({ ...posAbs, objectFit: 'cover' }),
        size,
    };
};
