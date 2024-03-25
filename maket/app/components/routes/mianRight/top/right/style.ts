import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            flex: '1 1',
            paddingLeft: '3em',
            borderLeft: `1px solid ${theme?.gray}`,

            display: 'flex',
            flexDirection: 'column',
            gap: '2em',
        })),
        Title: styled.div({ fontSize: '1.25em' }),
        Settings: styled.div({
            display: 'flex',
            flexWrap: 'wrap',
            div: { flex: '0 0 calc(50% - 1.5em)' },
            gap: '1.5em',
        }),
        size,
    };
};
