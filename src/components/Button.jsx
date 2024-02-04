import styled from 'styled-components';

const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.size === 'sm' ? '17px' : props.size === 'md' ? '20px' : props.size === 'lg' ? '22px' : props.size === 'xlg' ? '25px' : '17px'};
  padding: 0 ${(props) => props.size === 'sm' ? '1.4rem' : props.size === 'md' ? '1.6rem' : props.size === 'lg' ? '2rem' : props.size === 'xlg' ? '2.5rem' : '1.4rem'};
  height: ${(props) => props.size === 'sm' ? '37px' : props.size === 'md' ? '40px' : props.size === 'lg' ? '50px' : props.size === 'xlg' ? '55px' : '37px'};
  background-color: ${(props) => props.variant === 'dark' ? '#1E1E1E' : props.variant === 'grey' ? '#373737' : '#FFFFFF'};
  color: #ffffff;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;
`

function Button({ type, variant, className, onClick, children, size }) {
  return (
    <ButtonComponent
      type={type ? type : 'submit'}
      variant={ variant }
      className={ className ? `Button__${className}` : 'Button' }
      onClick={ onClick }
      size={ size }
    >
      { children }
    </ButtonComponent>
  )
}

export default Button;
