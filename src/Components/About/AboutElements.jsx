import styled from 'styled-components'

export const AboutContainer = styled.div`
    display:block;
    width: 100%;
    color: white;
    justify-content: center;
`

export const AboutWrap = styled.div`
    display: block;
    width: 100%;
    max-width: 768px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin: 0 auto;
`

export const AboutH1 = styled.div`
    width: 100%;
    font-size: clamp(20px, 6vw, 60px);
    padding-top: 15px;
`

export const AboutText = styled.div`
    width: 100%;
    font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
    padding-top: 15px;
`

export const AboutList = styled.ul`
    width: 100%;
    font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
    padding-top: 30px;
`

export const ABoutListItem = styled.li`
    width: 100%;
    font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
`
