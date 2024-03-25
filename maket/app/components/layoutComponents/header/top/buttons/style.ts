import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            alignItems: 'center',
        }),
        Separator: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            height: '3em',
            width: 1,
            backgroundColor: theme?.strokeGray,
        })),
        Icon: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            fontSize: '2em',
            '&.icon-notifications': {
                color: theme?.mainBlue,
            },
            '&.icon-favourites': {
                color: '#77829E',
            },
        })),
        size,
    };
};
