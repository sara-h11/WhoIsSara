import { useSelector, useDispatch } from 'react-redux'
import { themeColorValue, toggle } from './themeColorSlice';


function ThemeColor() {
    const color = useSelector(themeColorValue)
    const dispatch = useDispatch()
    return ( 
        <>
            <a className="menu-btn" href="#" onClick={() => dispatch(toggle())}>
                {color}
            </a>
        </>
     );
}

export default ThemeColor;

