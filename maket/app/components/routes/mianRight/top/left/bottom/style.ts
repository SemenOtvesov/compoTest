import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '2em',
            marginTop: '2em',
        }),
        Info: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
        }),
        ButtonBox: styled.div({
            display: 'flex',
            gap: '1em',
        }),
        Icon: styled.div({ fontSize: '1.5em' }),
        size,
    };
};
