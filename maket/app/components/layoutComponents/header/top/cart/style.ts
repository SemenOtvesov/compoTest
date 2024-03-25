import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Icon: styled.div({
            fontSize: '1.5em',
        }),
        Text: styled.div({
            fontWeight: 700,
        }),
        size,
    };
};
