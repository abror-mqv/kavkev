import React from "react";
import MainContainer from "../components/MainContainer";
import { useTranslation } from "react-i18next"

const ErrorPage = () => {
  const {t, i18n} = useTranslation()
    return (
        <MainContainer>
            <h1>
                {t('site.errorpage')}
            </h1>
        </MainContainer>
    );
};
export default ErrorPage;
