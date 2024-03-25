import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '3em 0',
            borderBottom: `1px solid ${theme?.gray}`,
        })),
        Item: styled.div({
            display: 'flex',
            gap: '3em',
            alignItems: 'center',
        }),
        size,
    };
};
