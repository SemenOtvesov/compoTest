import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export type Tmod = {
    backgroundColor: string;
    color: string;
    hover: { boxShadowColor: string };
    focus: { backgroundColor: string };
    disabled: { backgroundColor: string; color: string };
};

type Tbutton = {
    theme?: TglobalTheme;
    mod?: Tmod;
};

export default () => {
    const size = useWindowSizeCheck();
    return {
        Button: styled.button(({ theme, mod }: Tbutton) => ({
            padding: '1.25em 1.5em',
            width: 'fit-content',
            backgroundColor: mod?.backgroundColor,
            color: mod?.color,
            borderRadius: 8,
            transition: '0.3s',
            fontSize: '1em',
            fontWeight: 500,
            lineHeight: '1em',

            display: 'flex',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'center',

            ':hover': { boxShadow: `0 7px 16px ${mod?.hover.boxShadowColor}` },
            ':focus': { backgroundColor: mod?.focus.backgroundColor },
            ':disabled': {
                backgroundColor: mod?.disabled.backgroundColor,
                color: mod?.disabled.color,
            },
        })),
        size,
    };
};
