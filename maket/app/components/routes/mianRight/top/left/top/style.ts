import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            width: '0 0 32%',

            display: 'flex',
            flexDirection: 'column',
            gap: '1.5em',
            paddingBottom: '2em',
            borderBottom: `1px solid ${theme?.gray}`,
        })),
        OldPrise: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.errorRed,
            fontWeight: 700,
        })),
        NewPrice: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.textBlack,
            fontWeight: 700,
            fontSize: '2em',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
        })),
        Settings: styled.div({ display: 'flex', alignItems: 'center', gap: '2em' }),
        SettingsCount: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.gray,
            backgroundColor: theme?.whiteGray,
            borderRadius: 8,
            padding: 8,
        })),
        SettingsText: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.textBlack,
            fontWeight: 600,
        })),
        Sale: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            fontSize: '0.5em',
            backgroundColor: theme?.errorRed,
            padding: '5px 8px',
            color: '#fff',
            borderRadius: 4,
            lineHeight: '1em',
            height: 'fit-content',
        })),
        size,
    };
};
