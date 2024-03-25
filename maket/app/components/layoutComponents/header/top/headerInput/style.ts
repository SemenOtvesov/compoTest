import { TglobalTheme, globalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import { CSSProperties } from 'react';

export const containerAttributes: CSSProperties = {
    width: '45%',
};
export const inputAttributes = {
    '::placeholder': { color: globalTheme.textBlack, fontWeight: 700 },
} as CSSProperties;

export default () => {
    const size = useWindowSizeCheck();
    return {
        Icon: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            fontSize: '1.5em',
            transition: '0.3s',
            '&.icon-close': {
                transform: 'translate(0, 1px)',
                ':hover': { color: theme?.errorRed },
            },
            '&.icon-search': {
                ':hover': { color: theme?.mainBlue },
            },
        })),
        size,
    };
};
