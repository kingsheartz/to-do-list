import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPalette, faSun } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../contexts/ThemeContext';
import { OptionDiv, ThemePickerContainerDiv, ThemePickerDiv, ThemeSelecterDiv } from './Style'
import { Theme } from '../../assets/design/Theme';

const ThemePicker = () => {
    const { showThemeSelecter, setShowThemeSelecter } = useContext(ThemeContext)
    return (
        <ThemePickerDiv> Theme &nbsp;
            <ThemePickerContainerDiv onClick={() => { showThemeSelecter === false ? setShowThemeSelecter(true) : setShowThemeSelecter(false) }}>
                <FontAwesomeIcon
                    icon={faPalette}
                    size={'lg'} />
            </ThemePickerContainerDiv>{showThemeSelecter ? <ThemeSelecter /> : null}
        </ThemePickerDiv>
    )
}

const ThemeSelecter = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { showThemeSelecter, setShowThemeSelecter } = useContext(ThemeContext)
    return (
        <ThemeSelecterDiv>
            <OptionDiv
                title={"Light theme"}
                currentTheme={theme.name}
                theme={"light-theme"}
                onClick={() => { setTheme(Theme["light-theme"]); showThemeSelecter === false ? setShowThemeSelecter(true) : setShowThemeSelecter(false)}} >
                <FontAwesomeIcon icon={faSun} size={"lg"} color={"black"}></FontAwesomeIcon>
            </OptionDiv>
            <OptionDiv
                title={"Dark theme"}
                currentTheme={theme.name}
                theme={"dark-theme"}
                onClick={() => { setTheme(Theme["dark-theme"]); showThemeSelecter === false ? setShowThemeSelecter(true) : setShowThemeSelecter(false)}} >
                <FontAwesomeIcon icon={faMoon} size={"lg"}></FontAwesomeIcon>
            </OptionDiv>
        </ThemeSelecterDiv>
    )
}

export default ThemePicker;
