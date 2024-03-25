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
            color: theme?.textBlack,
        })),
        Item: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5em',
        }),
        ItemTitle: styled.div({
            fontWeight: 700,
        }),
        ItemSubList: styled.div({ display: 'flex', flexDirection: 'column', gap: '1em' }),
        ItemSubItem: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            transition: '0.3s',
            ':hover': { color: theme?.mainBlue },
        })),
        size,
    };
};
