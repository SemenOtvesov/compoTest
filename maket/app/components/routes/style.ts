import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';
import { TglobalTheme } from '@app/hooks/useTheme';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: '2em 1.5em',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5em',
            maxWidth: 1680,
            margin: '0 auto',
        }),
        Title: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.textBlack,
            fontSize: '2em',
            fontWeight: 700,
        })),
        Main: styled.div({ marginTop: '0.75em', display: 'flex', gap: '3em' }),
        size,
    };
};
