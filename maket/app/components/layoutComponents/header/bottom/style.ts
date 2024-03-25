import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.75em 1.5em',
            borderBottom: `1px solid ${theme?.whiteGray}`,
        })),
        ItemBox: styled.div({
            display: 'flex',
            gap: 24,
            alignItems: 'center',
        }),
        Item: styled.a(({ theme }: { theme?: TglobalTheme }) => ({
            fontWeight: 700,
            color: theme?.textBlack,
            transition: '0.3s',
            ':hover': { color: theme?.mainBlue },
        })),
        size,
    };
};
