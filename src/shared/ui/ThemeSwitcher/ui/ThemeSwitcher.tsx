import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightModeIcon from 'shared/assets/icons/light-mode.svg'
import DarkModeIcon from 'shared/assets/icons/dark-mode.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button onClick={ toggleTheme }
            theme={ ThemeButton.CLEAR }
            className={ classNames(cls.ThemeSwitcher, {}, [className]) }
    >
      { theme === Theme.DARK ? <DarkModeIcon/> : <LightModeIcon/> }
    </Button>
  )
}