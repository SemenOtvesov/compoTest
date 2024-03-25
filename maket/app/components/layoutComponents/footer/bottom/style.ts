import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '2.5em',
            flexDirection: 'column',
            padding: '3em 0',
            color: theme?.gray,
        })),
        IconList: styled.div({
            display: 'flex',
            justifyContent: 'center',
            gap: '1.75em',
        }),
        IconItem: styled.div({
            display: 'flex',
            gap: '0.5em',
        }),
        Text: styled.div({ textAlign: 'center' }),
        LogoList: styled.div({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5em',
            img: { filter: 'grayscale(100%)', opacity: 0.3 },
        }),
        size,
    };
};
