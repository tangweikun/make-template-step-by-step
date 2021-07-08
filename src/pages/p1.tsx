import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import styles from './P1.module.css';

function P1(): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <div className={styles.wrapper}>
      <Button type="primary">Antd</Button>
      {t('title')}
    </div>
  );
}

export default P1;
