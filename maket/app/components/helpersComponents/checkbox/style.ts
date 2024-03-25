import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import { SxProps } from '@mui/material';
import { motion } from 'framer-motion';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            width: 40,
            height: 24,
            backgroundColor: theme?.gray,
            borderRadius: 32,
            position: 'relative',
            transition: '0.3s',

            ':hover': {
                width: 48,
                height: 32,
                div: {
                    width: 28,
                },
            },
        })),
        CircleStart: styled(motion.div)(() => ({
            ...Circle(),
            left: 0,
            transform: 'translate(0, -50%)',
        })),
        CircleEnd: styled(motion.div)({
            ...Circle(),
            right: 0,
            transform: 'translate(0, -50%)',
        }),
        size,
    };
};
function Circle(): any {
    let allStyle: SxProps = {
        backgroundColor: '#fff',
        width: 20,
        aspectRatio: '1',
        borderRadius: '50%',
        transition: '0.3s',

        position: 'absolute',
        top: '50%',
    };

    return allStyle;
}
