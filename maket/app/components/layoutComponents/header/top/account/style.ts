import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            alignItems: 'center',
            gap: 16,
        }),
        Logo: styled.img({
            display: 'block',
            width: '2em',
            aspectRatio: '1',
        }),
        Name: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            fontWeight: 700,
            color: theme?.textBlack,
        })),
        Arrow: styled.div({}),
        size,
    };
};
