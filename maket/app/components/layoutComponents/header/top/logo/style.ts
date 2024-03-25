import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Logo: styled.img({
            aspectRatio: '5.14/1',
            width: 'auto',
            height: '1.75em',
        }),
        size,
    };
};
