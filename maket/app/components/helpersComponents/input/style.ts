import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import { CSSProperties } from 'react';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(
            ({
                theme,
                containerProps,
            }: {
                theme?: TglobalTheme;
                containerProps?: CSSProperties;
            }) => ({
                ...containerProps,
                border: `1px solid ${theme?.strokeGray}`,
                padding: '1em 1.25em',
                borderRadius: 8,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                transition: '0.3s',

                ':hover': { borderColor: theme?.strokeDarkGray },
                ':focus-within': {
                    boxShadow: `0 0 0 1px ${theme?.mainBlue}`,
                    borderColor: theme?.mainBlue,
                },
                '&:has(input:disabled)': { borderColor: theme?.strokeDarkGray + '00' },
                '&.error': {
                    boxShadow: `0 0 0 1px ${theme?.errorRed}`,
                    borderColor: theme?.errorRed,
                    color: theme?.errorRed,
                    '::placeholder': {
                        color: theme?.errorRed,
                    },
                },
            }),
        ),
        Input: styled.input(
            ({ theme, inputProps }: { theme?: TglobalTheme; inputProps?: CSSProperties }) => ({
                width: '100%',
                backgroundColor: '#00000000',
                '::placeholder': {
                    color: theme?.inputTextGray,
                },
                color: theme?.textBlack,
                ...inputProps,
            }),
        ),
        size,
    };
};
