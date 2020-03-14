import Typography from "typography"
import twinPeaksTheme from "typography-theme-twin-peaks"

twinPeaksTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete twinPeaksTheme.googleFonts;

const typography = new Typography(twinPeaksTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
