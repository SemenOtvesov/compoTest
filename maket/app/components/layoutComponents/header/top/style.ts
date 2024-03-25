import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1em 1.5em',
            alignItems: 'center',
            borderBottom: `1px solid ${theme?.whiteGray}`,
        })),
        Separator: styled.div({}),
        size,
    };
};
