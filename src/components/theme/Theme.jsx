import { createTheme } from '@mui/material/styles';
import '../../assets/fonts.css'
const arcPurple = "#0E4062";
const arcYellow = "#F9AE19";
const arcGreen = "#265626";
const arcRed = "#E5281E"

export default createTheme({
    palette: {
        common: {
            purple: `${arcPurple}`,
            yellow: `${arcYellow}`,
            green: `${arcGreen}`,
            red: `${arcRed}`
        },
        primary: {
            main: `${arcPurple}`
        },
        secondary: {
            main: `${arcYellow}`
        },
        text: {
            primary: '#FFFFFF',

        },
        action: {
            active: `${arcRed}`,
            hover: `${arcGreen}`
        }
    },
    typography: {
        tab:{
            color: `${arcYellow}`
        },
        fontFamily: "montserrat"
    }

});