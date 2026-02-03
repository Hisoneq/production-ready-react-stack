import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export default function AboutPage() {
    const { t } = useTranslation('about');

    return <Page>{t('О сайте')}</Page>;
}
