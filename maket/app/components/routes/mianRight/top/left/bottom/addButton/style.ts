import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ButtonContainer: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            flex: '1 1',
            border: `2px solid ${theme?.mainBlue}`,
            borderRadius: 8,

            display: 'flex',
            justifyContent: 'space-between',
            color: theme?.textBlack,
            overflow: 'hidden',
        })),
        Button: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            height: '100%',
            aspectRatio: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5em',
            fontWeight: 700,
            transition: '0.3s',
            borderRadius: 8,
            cursor: 'pointer',

            ':hover': { backgroundColor: theme?.azure },
        })),
        Text: styled.div({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            span: { fontWeight: 700 },
        }),
        size,
    };
};
