import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function BasicLayout(props: IProps): JSX.Element {
  return (
    <div>
      BasicLayout
      {props.children}
    </div>
  );
}

export default BasicLayout;
