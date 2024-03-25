import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        InfoItem: styled.div({}),
        InfoTitle: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            fontWeight: 700,
            marginBottom: 15,
            color: theme?.textBlack,
            width: '100%',
        })),
        InfoText: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.gray,
            fontSize: '0.85em',
        })),
        size,
    };
};
