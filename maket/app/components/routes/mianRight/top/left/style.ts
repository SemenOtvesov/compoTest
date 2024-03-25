import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return { Container: styled.div({ marginRight: '3em' }), size };
};
