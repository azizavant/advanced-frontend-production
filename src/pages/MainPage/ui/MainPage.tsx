import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>

      { t("Main page") }
      { t("Main page8985") }
    </div>
  )
}

export default MainPage