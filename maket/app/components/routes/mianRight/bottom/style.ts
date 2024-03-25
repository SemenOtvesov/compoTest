import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5em',
            color: theme?.textBlack,
        })),
        Title: styled.div({
            fontWeight: 500,
            fontSize: '1.5em',
        }),
        Text: styled.div({ fontSize: '1.13em' }),
        size,
    };
};
